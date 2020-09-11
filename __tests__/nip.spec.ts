import { validatePolish } from '../src';
import { invalidNips, nips } from '../__tests-utils__';

test('nip', () => {
    for (const nip of nips) {
        const isValid = validatePolish.nip(nip);
        expect(isValid).toBeTruthy();
    }

    for (const nip of invalidNips) {
        const isValid = validatePolish.nip(nip);
        expect(isValid).toBeFalsy();
    }
});
