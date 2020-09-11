import { validatePolish } from '../src';
import { invalidPesels, pesels } from '../__tests-utils__';

test('pesel', () => {
    for (const pesel of pesels) {
        const isValid = validatePolish.pesel(pesel);
        expect(isValid).toBeTruthy();
    }

    for (const pesel of invalidPesels) {
        const isValid = validatePolish.pesel(pesel);
        expect(isValid).toBeFalsy();
    }
});
