declare const validatePolish: {
    checksum: (number: string, weights: number[]) => boolean;
    /**
     * Validation of PESEL.
     * @param {string} pesel
     * @returns {boolean}
     */
    pesel(pesel: string): boolean;
    /**
     * Validation of NIP.
     * @param {*} nip
     * @returns {boolean}
     */
    nip(nip: string): boolean;
    /**
     * Validation of REGON.
     * @param {string} regon
     * @returns {boolean}
     */
    regon(regon: string): boolean;
    /**
     * Validation of identity card.
     * @param {*} num
     * @returns {boolean}
     */
    identityCard(num: string): boolean;
    /**
     * Checks if given number of identity card is valid.
     * @param {string} num - series and number of identity card to validate
     * @return {boolean} - true if identity card is valid, false if invalid
     */
    identityCardWithSeparator(num: string): boolean;
};
export default validatePolish;
