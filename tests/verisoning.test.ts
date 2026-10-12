import { describe, expect, it } from 'vitest';
import packageJson from '../package.json';
import packageLock from '../package-lock.json';

describe('package versioning', () => {
  it('declares the expected package identity and version', () => {
    expect(packageJson.name).toBe('hoalu');
    expect(packageJson.version).toBe('0.1.1');
  });

  it('uses a stable semantic version', () => {
    expect(packageJson.version).toMatch(/^\d+\.\d+\.\d+$/);
  });

  it('keeps the package-lock root metadata synchronized', () => {
    const lockfilePackage = packageLock.packages[''];

    expect(lockfilePackage).toBeDefined();
    expect(lockfilePackage?.name).toBe(packageJson.name);
    expect(lockfilePackage?.version).toBe(packageJson.version);
  });
});