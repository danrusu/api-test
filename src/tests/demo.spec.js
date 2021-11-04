import fetch from 'node-fetch';
import { expect } from 'chai';

const BASE_URL = 'http://qatools.ro';

describe('Names Test Suite', () => {
	let accessToken;

	it('Should Authenticate', async () => {
		const response = await fetch(
			`${BASE_URL}/api/login.php?username=tester&password=passw0rd`,
			{ method: 'POST' }
		);

		expect(response.status).eq(200);
		accessToken = response.headers.get('access-token');
		expect(accessToken).is.not.undefined;
	});

	it('Should fetch Names if authenticated', async () => {
		const response = await fetch(`${BASE_URL}/api/names.php`, {
			headers: { 'access-token': accessToken },
		});

		expect(response.status).eq(200);
	});

	it('Should not fetch Names if not authenticated', async () => {
		const response = await fetch(`${BASE_URL}/api/names.php`);
		expect(response.status).eq(401);
	});
});
