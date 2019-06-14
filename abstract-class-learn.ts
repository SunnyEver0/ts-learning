abstract class Department {
    name: string

    constructor(name: string) {
        this.name = name;
    }

    printName(): void {
        console.log(`${this.name} is`);
    }

    abstract printMeeting(): void
}

class AccountingDepartment extends Department{

    constructor() {
        super('Accounting ad Auditing');
    }

    printMeeting(): void {
        console.log(`This Accoounting meeting`);
    }

    generateReports(): void {
        console.log('generateReports');
    }

}

let department: AccountingDepartment;
department = new AccountingDepartment();
department.printName();
department.printMeeting();
department.generateReports();
