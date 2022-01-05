import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter {
    constructor(
        readonly client: string,
        public details: string,
        public amount: number,
    ) {}

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}