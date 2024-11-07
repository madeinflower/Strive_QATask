export function generateRandomName() {
    const names = ['John', 'Tetiana', 'Alice', 'Bob', 'David'];
    return names[Math.floor(Math.random() * names.length)];
}

export function generateRandomEmail() {
    const domain = '@gmail.com';
    const randomString = Math.random().toString(36).substring(7);
    return `${randomString}${domain}`;
}

export function generateRandomPassword() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let password = '';
    for (let i = 0; i < 12; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

export function generateRandomPhoneNumber() {
    const randomPhone = '+1' + Math.floor(Math.random() * 1000000000);
    return randomPhone;
}

export function generateRandomAddress() {
    return `Street ${Math.floor(Math.random() * 1000)}`;
}

export function generateRandomCity() {
    const cities = ['New York', 'Jerusalem', 'Mumbai', 'Berlin', 'Paris'];
    return cities[Math.floor(Math.random() * cities.length)];
}

export function generateRandomZipCode() {
    return Math.floor(Math.random() * 1000000);
}

export function generateRandomLastName() {
    const lastNames = ['Tatsenko', 'Smith', 'Johnson', 'Doe', 'Brown'];
    return lastNames[Math.floor(Math.random() * lastNames.length)];
}

export function generateRandomCompany() {
    const companies = ['TechCorp', 'SomeCompany', 'Innovative Solutions', 'Global Enterprises', 'Startup Inc.'];
    return companies[Math.floor(Math.random() * companies.length)];
}

export function generateRandomState() {
    const states = ['California', 'New York', 'Texas', 'Florida', 'Berlin'];
    return states[Math.floor(Math.random() * states.length)];
}
