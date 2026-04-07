import type { FileSystem, FileSystemNode } from '../types/terminal';

export class FileSystemHelper {
  static normalizePath(path: string): string {
    // Remove trailing slashes except for root
    if (path !== '/' && path.endsWith('/')) {
      path = path.slice(0, -1);
    }

    // Handle relative paths
    if (!path.startsWith('/')) {
      path = '/' + path;
    }

    // Resolve '..' and '.'
    const parts = path.split('/').filter(part => part !== '');
    const resolvedParts: string[] = [];

    for (const part of parts) {
      if (part === '..') {
        resolvedParts.pop();
      } else if (part !== '.') {
        resolvedParts.push(part);
      }
    }

    return '/' + resolvedParts.join('/');
  }

  static joinPath(basePath: string, ...paths: string[]): string {
    const allPaths = [basePath, ...paths];
    return this.normalizePath(allPaths.join('/'));
  }

  static getParentPath(path: string): string {
    const normalized = this.normalizePath(path);
    if (normalized === '/') return '/';

    const parts = normalized.split('/');
    parts.pop();
    return parts.length <= 1 ? '/' : parts.join('/');
  }

  static getBaseName(path: string): string {
    const normalized = this.normalizePath(path);
    if (normalized === '/') return '/';

    const parts = normalized.split('/');
    return parts[parts.length - 1];
  }

  static navigateToPath(
    fileSystem: FileSystem,
    path: string,
    currentDir: string = '/'
  ): FileSystemNode | null {
    let targetPath: string;

    if (path.startsWith('/')) {
      targetPath = this.normalizePath(path);
    } else {
      targetPath = this.normalizePath(this.joinPath(currentDir, path));
    }

    if (targetPath === '/') {
      return {
        name: 'root',
        type: 'directory',
        children: fileSystem
      };
    }

    const parts = targetPath.split('/').filter(part => part !== '');
    let current: FileSystemNode | undefined = {
      name: 'root',
      type: 'directory',
      children: fileSystem
    };

    for (const part of parts) {
      if (!current || current.type !== 'directory' || !current.children) {
        return null;
      }
      current = current.children[part];
    }

    return current || null;
  }

  static listDirectory(
    fileSystem: FileSystem,
    path: string,
    showHidden: boolean = false
  ): FileSystemNode[] {
    const node = this.navigateToPath(fileSystem, path);

    if (!node || node.type !== 'directory' || !node.children) {
      return [];
    }

    return Object.values(node.children)
      .filter(child => showHidden || !child.hidden)
      .sort((a, b) => {
        // Directories first, then files
        if (a.type !== b.type) {
          return a.type === 'directory' ? -1 : 1;
        }
        return a.name.localeCompare(b.name);
      });
  }

  static fileExists(
    fileSystem: FileSystem,
    path: string,
    currentDir: string = '/'
  ): boolean {
    return this.navigateToPath(fileSystem, path, currentDir) !== null;
  }

  static isDirectory(
    fileSystem: FileSystem,
    path: string,
    currentDir: string = '/'
  ): boolean {
    const node = this.navigateToPath(fileSystem, path, currentDir);
    return node !== null && node.type === 'directory';
  }

  static readFile(
    fileSystem: FileSystem,
    path: string,
    currentDir: string = '/'
  ): string | null {
    const node = this.navigateToPath(fileSystem, path, currentDir);

    if (!node || node.type !== 'file') {
      return null;
    }

    return node.content || '';
  }
}