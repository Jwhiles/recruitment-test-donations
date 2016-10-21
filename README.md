# Recruitment Test - Charity Donations
An unattended front end recruitment test for JustGiving.

## The Challenge
Create an application to display the latest donations for a charity using [React](https://facebook.github.io/react) and [Node.js](https://nodejs.org).

### Requirements
A good solution will
* be production ready
* work on evergreen browsers
* have good test coverage and show evidence of TDD
* have an elegant user experience and design
* use _appropriate_ front end tooling

Your solution should be performant, consider the `DOMContentLoaded` and `load` events, and first time to paint. You may choose to use server-side rendering or service workers to achieve this.

Please put your solution on a public repository hosting service such as [GitHub](https://github.com) (it is always nice to see a clean commit history). Finally, don't forget the README file for your solution.

### Getting Started
1. Create an account on [JustGiving Developer](https://developer.justgiving.com/) to obtain an `appId`.

2. Choose a `charityId` from one of the charities below.

	| Charity                                                                       | ID     |
	|-------------------------------------------------------------------------------|--------|
	| [British Heart Foundation](https://www.justgiving.com/britishheartfoundation) | 183092 |
	| [Macmillan Cancer Support](https://www.justgiving.com/macmillan)              | 2116   |
	| [Cancer Research UK](https://www.justgiving.com/cancerresearchuk)             | 2357   |
	| [Oxfam](https://www.justgiving.com/oxfam)                                     | 13441  |
	| [National Trust](https://www.justgiving.com/nationaltrust)                    | 183560 |
	| [Save the Children](https://www.justgiving.com/savethechildren)               | 18570  |

3. Substitute the `appId` and `charityId` in the curl commands below. You should be able to use these commands to retrieve information about your charity.
```
curl -H "Content-Type: application/json" https://api.justgiving.com/{appId}/v1/charity/{charityId}
```
```
curl -H "Content-Type: application/json" https://api.justgiving.com/{appId}/v1/charity/{charityId}/donations
```
