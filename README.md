# Single Page Application Skeleton (in React)
Questo progetto è parte del corso di Advanced React e il suo utilizzo è a solo scopo didattico.
Per crearlo è stato utilizzzata la CLI [Create React App](https://github.com/facebook/create-react-app).

# Attività da svolgere
1. Aggiungere la list view con l'elenco dei Tickets
	- Open New Ticket (button)
	- Edit / Delete del singolo Ticket

2. Aggiungere la form di inserimento nuovo Ticket

3. Aggiungere la form di modifica di un Ticket esistente

4. Aggiungere la cancellazione di un Ticket

5. Aggiungere un componente di notifica Toastr-like, utilizzando un Portal component

6. Realizzare un componente che usi HOC *oppure* Render Props *oppure* Hook per incapsulare 
la chiamata al servizio dati

7. Aggiungere alcunei test con Jest per validate il funzionamento di alcune parti 
*(a scelta)* della applicazione 


**Tutte le view andranno create come Function Component, 
utilizzando gli hooks dove necessario.**

*Tutte le funzionalità dovranno utilizzare un servizio che 
implementa le funzionalità CRUD (GET, POST, PUT, DELETE) 
comunicando con le REST API disponibili all'URL indicato 
nella documentazione.*

# Documentazione
## Accesso al servizio REST
**URL:** https://icticketing.azurewebsites.net/api/ticketanon

**Come specificare HTTP Verb, Body e Headers nelle chiamate HTTP**
```
const promise = await fetch(this.apiURL, { 
                method: 'POST',
                headers: this.basicHeaders,
                body: JSON.stringify(ticket)
            });
```

## Form di Creazione Ticket
**Campi**
- *Title* (testo)
- *Description* (testo multi linea)
- *Category* (combo)
    - Unknown (valore = 1)
    - Development (2)
    - System (3)
- *Priority* (combo)
    - Low (valore = 1)
    - Normal (2)
    - High (3)

## Form di Modifica Ticket
**Campi**
- *Title* (testo)
- *Description* (testo multi linea)
- *Category* (combo, valori come sopra)
- *Priority* (combo, valori come sopra)
- *State* (combo)
    - New (valore = 1)
    - On Going (2)
    - Close (3)

## Nota sul modello Ticket
Nella cartella Models è presente una classe `Ticket`, 
da utilizzarsi per il popolamento della vista tabellare (punto 1).
Questo modello NON è adatto per il salvataggio di un nuovo Ticket / Ticket modificato: utilizzare il modello `TicketWriteModel`.

## Script disponibili

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
