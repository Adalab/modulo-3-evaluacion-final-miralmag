🧙🧙 #Harry Potter browser in React JS# 🧙🧙

**Component structure:** 📂

1. App

    1.1 Header

    1.2 Filters

    1.3 CharacterList

        1.3.1 CharacterCard

    1.4 CharacterDetails
    

**Usability:** ⚙️

The app receives data from an API and fetch it with the hpApi.js component in Services folder.
The default view of results is the list of **Gryffindor** characters sorted alphabetically.
If the API provides no image, it shows a default image.

The app can filter results by name, house and/or gender.
These searches are stored in local.

Both results and localStorage data can be reset by clicking the Reset button.

By clicking on any character, the app navigates via dynamic routes to a new page with more details of the character.
Here, the data received from the API has been translated into Spanish.
Also, the crest image changes according to the character's house.

By clicking on the Back button, you return to the previous search results page.


NOTES:
- Optimised for mobile devices.
- Proptypes provided.
