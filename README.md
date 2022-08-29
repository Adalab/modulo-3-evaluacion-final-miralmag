## Proyecto de evaluación final de React

Harry Potter browser in React JS

Component structure:

App
Header
Filters
CharacterList
CharacterCard
CharacterDetails

Usability:

The app receives data from an API and fetch it with the hpApi.js component in Services folder.
The default view of results is the list of Gryffindor characters sorted alphabetically.

The app can filter results by name, house and/or gender.
This searches are stored in local.

Both results and localStorage data can be reset by clicking the Reset button.

By clicking on any character, the app navigates via dynamic routes to a new page with more details of the character.
Here, the data received from the API has been translated.
Also, the crest image changes according to the character's house.

By clicking on the Back button, you return to the previous search results page.
