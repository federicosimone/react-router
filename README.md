# Mini E-Commerce con router e API 

Questo progetto è il frontend di un mini e-commerce realizzato in React, che utilizza Fake Store API come backend fittizio per simulare il caricamento e la visualizzazione dei prodotti.

L’obiettivo è mettere in pratica il routing, la navigazione dinamica e la gestione delle pagine principali di un e-commerce.

Lista prodotti=> URL (https://fakestoreapi.com/products)
Dettaglio prodotto => URL (URL (https://fakestoreapi.com/products/:id)

Il progetto è composto dalle seguenti pagine:

- Homepage
- Chi siamo
- Prodotti
- Dettaglio prodotto

È stata implementata una Navbar persistente visibile in tutte le pagine. Inserendola nel DefaultLayout.
Il routing è gestito tramite React Router DOM.
È stato utilizzato un Layout per centralizzare la Navbar e il footer evitando duplicazioni.
I link della Navbar utilizzano NavLink per gestire lo stato active, mentre gli altri bottoni presenti utilizzano il Link to=...



