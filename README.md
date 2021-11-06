|MT Walid HAMMAMI||ISET GAFSA 2021|
| :- | :-: | :-: |

**TP 1 : Premier pas avec Angular**




**Objectifs :**

A la fin de ce TP l’étudiant sera capable :

- ` `D’installer les différents outils et plateformes de développement
- ` `Créer une application Angular
- ` `Installer les modules nécessaires
- ` `Exécuter une application Angular

` `**Prérequis :**

Pour utiliser le Framework Angular, vous devez être familiarisé avec les éléments suivants :

- HTML5, 
- CSS3, 
- JavaScript

**Remarque : l**a connaissance de TypeScript est utile, mais pas obligatoire.

1. ` `**Installation**

Pour installer Angular sur votre système local, vous avez besoin des éléments suivants :

***Node.js***

Angular nécessite une version LTS active ou LTS de maintenance de Node.js (<https://nodejs.org/en/about/releases/> ).

Pour plus d'informations sur l'installation de Node.js, consultez [http://nodejs.org](http://www.nodejs.org) . Si vous ne savez pas quelle version de Node.js s'exécute sur votre système, exécutez **node -v** dans une fenêtre de terminal.

***npm : gestionnaire de paquets***

npm est le [gestionnaire de paquets](https://fr.wikipedia.org/wiki/Gestionnaire_de_paquets) officiel de [Node.js](https://fr.wikipedia.org/wiki/Node.js). 

Angular, Angular CLI et les applications Angular dépendent des paquets npm pour de nombreuses fonctionnalités et fonctions. Pour télécharger et installer des paquets npm, vous avez besoin d'un gestionnaire de paquets npm. Ce guide utilise l'interface de ligne de commande du client npm, qui est installé par défaut avec Node.js. Pour vérifier que vous avez installé le client npm, exécutez **npm -v** dans une fenêtre de terminal.



**Installer Angular CLI**

Vous utilisez Angular CLI pour créer des projets, générer du code d'application et de bibliothèque, et effectuer diverses tâches de développement en cours, telles que les tests, le regroupement et le déploiement.



Pour installer Angular CLI, ouvrez une fenêtre de terminal et exécutez la commande suivante :

npm install -g @angular/cli

1. ` `**Création d’une application Angular**

` `Pour créer une première application Angular:

- ` `Exécutez la commande CLI **ng new** et fournissez le nom **my-app,** comme indiqué ici :

ng new my-app

- ` `La commande ng new vous invite à fournir des informations sur les fonctionnalités à inclure dans l'application initiale. Acceptez les valeurs par défaut en appuyant sur la touche Entrée.

Angular CLI installe les paquets npm Angular nécessaires et les autres dépendances. Cela peut prendre quelques minutes.

` `Le CLI crée un nouvel espace de travail et une application de bienvenue simple, prête à fonctionner.

1. **Exécuter l’application**

Angular CLI comprend un serveur, qui vous permet de construire et exécuter localement une application Angular.

Naviguez vers le dossier de l'espace de travail my-app. Exécutez les commandes suivantes :

cd my-app

ng serve

La commande **ng serve** lance le serveur, surveille vos fichiers, et reconstruit l'application au fur et à mesure que vous apportez des modifications à ces fichiers.

L'option --open (ou simplement -o) ouvre automatiquement votre navigateur à <http://localhost:4200/>.

Si votre installation et votre configuration se sont déroulées avec succès, vous devriez voir une page similaire à la suivante.







Structure du projet créé

**Résumé :**

Durant ce TP vous avez construit une application Angular à partir de zéro. Voici les commandes que vous devez tenir :

- npm –version : afficher la version courante de gestionnaire de paquet
- npm install –g @angular/cli : installer angular, l’option ‘-g’ pour dire indiquer que l’installation sera global
- ng  --version  : afficher la version courant d’Angular CLI
- ng new <nom\_application> : créer une nouvelle application
- npm install : installer les paquets npm nécessaires.















**TP 2 : Les composants**

**Objectifs :**

A la fin de ce TP l’étudiant sera capable de

- Créer un composant Angular
- Modifier un template
- Créer un prototype


**Application à réaliser**

Tout au long de déroulement de ces TPs on va développer une application Angular qui permet de gérer la liste des contacts. Cette application est organisée comme suite :

Si tu veux afficher un contact, tu auras probablement une application (ContactManager), affichant un menu (Menu) avec l’utilisateur connecté (User), bouton ou lien HyperText (Ajouter) et un autre pour afficher la liste des contacts. Une liste des contacts :










Un contact est caractérisé par :

- Nom & prénom de la personne
- Email
- Numéro de téléphone
- Description



1. **Création de l’application ContactManager**

Créer une application Angular à l’aide de l’outil Angular CLI

ng new ContactManager

cd ContactManager

npm install

1. **Exécution de l’application**

Pour vérifier si l’application a été bien crée, exécuter cette commande

ng serve –o

1. **Création d’un composant root**

` `Par défaut vous avez un composant principal AppComponent. Pour rendre notre projet plus structuré, créé un nouveau composant appelé root qui servira composant de base : 

ng generate component root

Supprimez tous les fichiers AppComponent du dossier app/. Changez le fichier app.module.ts pour rendre RootComponent le composant de base. Voici à quoi ressemble le fichier app.module.ts :

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { RootComponent } from './root/root.component';

@NgModule({

`  `declarations: [

`    `RootComponent

`  `],

`  `imports: [

`    `BrowserModule

`  `],

`  `providers: [],

`  `bootstrap: [RootComponent]

})

export class AppModule { }

Enregistrez les modifications ci-dessus et démarrez l’application web à l’aide de la commande suivante :

ng serve -o

L’application Web s’exécutera à <http://localhost:4200> .

` `Vérifiez si le composant root a été bien intégré dans votre application


1. **Création des autres composants**

Notre application ContactManager va contenir les composants suivants :

- Composant principal root (déjà créé)
- Composant menu : contenant le menu de l’application
- Composant contact-list : contenant la liste des contacts
- Composant contact-add : un formulaire pour ajouter un contact
- Composant contact-edit : un formulaire pour éditer un contact.

***4.1. Création du composant menu***

A la racine de votre projet dans un invite de commande, tapez la commande suivante : 

ng generate component menu

Pour intégrer le composant menu dans l’application. Modifiez le fichier root/root.component.html comme suite :

<app-menu></app-menu>

<p>root works!</p>

Vérifiez si le composant est bien intégré dans l’application.

***4.2- création du composant contact-list***

La procédure est la même qu’on a utilisé pour créer le composant menu. Après modification du fichier roo/root.component.html est comme suite :

<app-menu></app-menu>

<app-contact-list></app-contact-list>

Les autres composants seront créés dans les TPs suivants.



1. **Modification des templates**

Notre application maintenant contient deux composants : root & menu. Il est conseillé qu’avant commencer le développement, de créer un prototype de votre application avant de commencer le vrai développement.

Pour rendre notre application ergonomique et facile à l’utilisation, on va utiliser Framework css bootstrap. 

***5.1- Bootstrap*** 

Pour utiliser bootstrap dans votre projet, il y a deux façons :

1. Installer Bootstrap depuis le dépôt npm

Tapez cette commande pour ajouter Bootstrap à votre projet -bien sûre exécuté cette commande à la racine de votre projet) :

Pour Bootstrap 3 par exemple :

npm install bootstrap@3.3.7

Pour la dernière version de Bootstrap (version 5) :

npm install bootstrap



Bootstrap est installé dans le dossier node\_modules/bootstrap


1. Alternative : Bootstrap local

Comme alternative, vous pouvez également télécharger le CSS Bootstrap et l'ajouter localement à votre projet. J'ai téléchargé Bootstrap à partir du site Web et créé un dossier styles (même niveau que styles.css):

1. Importer le fichier css

Nous avons deux options pour importer le CSS de Bootstrap qui a été installé à partir de NPM :

- Configurez angular.json :

"styles": [

`  `"node\_modules/bootstrap/dist/css/bootstrap.min.css",

`  `"styles.scss"

]


- Importez directement dans src/style.css ou src/style.scss :

@import '~bootstrap/dist/css/bootstrap.min.css';

Personnellement, je préfère importer tous mes styles dans src/style.css car il a déjà été déclaré dans angular.json.

Pour plus d’information sur le framework css Bootstrap, veillez consulter cette page : [documentations](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

***5.2- Création d’un prototype de l’application***

Nous voulons créer un prototype (données statique) avant de commencer le développement. 

Ce prototype servira de base à la phase de conception de votre site web.

Quelques raisons de ce choix.

- Il est plus difficile et coûteux de faire des changements dans le code plutôt que dans un prototype.
- Si vous êtes amené à travailler en équipe, il est plus facile de savoir qui fait quoi.
- Il existe de nombreux outils de prototypage.
- Il facilite l’évolution et l'amélioration de l’interface.
- Il est plus rapide et facile de présenter un prototype à un éventuel client.

1. Template menu

Modifiez le fichier **menu.component.html** comme suite :

<header>

`    `<div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">

`        `<nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">

`            `<a class="me-3 py-2 text-dark text-decoration-none" href="#">Hi User</a>

`            `<a class="me-3 py-2 text-dark text-decoration-none" href="#">Ajouter</a>

`            `<a class="me-3 py-2 text-dark text-decoration-none" href="#">Liste des contacts</a>

`        `</nav>

`    `</div>

</header>

Sauvegardez le fichier et regardez l’effet de ce changement






Ici nous avons créé un menu contenant 3 éléments :

- Hi User : Nom d’utilisateur connecté
- Ajouter : lorsqu’on clique dessus, un formulaire d’ajout d’un nouveau contact doit être afficher
- Liste des contacts : pour aller à la liste des contacts

1. Template liste des contacts

Ajoutez le code suivant dans le template contact-list :

<main>

`    `<div class="row row-cols-1 row-cols-md-3 mb-3 text-center">

`        `<div class="col">

`            `<div class="card mb-4 rounded-3 shadow-sm">

`                `<div class="card-header py-3">

`                    `<h4 class="my-0 fw-normal">Contact 1</h4>

`                `</div>

`                `<div class="card-body">

`                    `<h1 class="card-title">Walid HAMMAMI</h1>

`                    `<ul class="list-unstyled mt-3 mb-4">

`                        `<li>Phone : xx xxxxxx</li>

`                        `<li>Email : walid.ham@hotmail.com</li>

`                        `<li>Description : amis</li>

`                    `</ul>

`                    `<div class="mat-card-actions">

`                        `<button type="button" class="btn btn-primary">

`                            `Edit

`                        `</button>

`                        `<button type="button" class="btn btn-danger">

`                            `Delete

`                        `</button>

`                    `</div>

`                `</div>

`            `</div>

`        `</div>

`    `</div>



</main>

Regardez l’effet de ce changement.

Ajoutez maintenant 4 contacts à votre template, comme la capture écran suivante :



Résumé :

- **ng new <nom-app>** : pour créer une application angular
- **npm install** : pour installer les paquets nécessaire 
- **ng generate component** <nom-composant> (ou : **ng g c <nom-composant>**) : pour créer un nouveau composant
- **ng serve -o** : démarrer le serveur par défaut intégré dans Angular
- **npm install bootstrap** : pour installer la dernière version de bootstrap
- **@import '~bootstrap/dist/css/bootstrap.min.css';** : importer bootstrap style
- **selector** : ‘app-nom-composant’ : nom de la balise à utiliser dans un template html












**TP 3 : Binding**

**Objectifs :**

A la fin de ce TP l’étudiant sera capable de :

- Utilisez des données de la classe du composant dans le template
- Implémentez des évènements et exécutez des fonctions
- Changer le comportement de l’interface graphique

1. **Concept**

Les interactions entre la vue et la classe du composant sont possibles avec différents types de bindings. L’implémentation de ces bindings permet d’enrichir la vue avec des données ou de déclencher l’exécution de code dans la classe du composant.

Le binding permet l’interfaçage entre le template et la classe du composant en:

- Faisant passer des données de la classe du composant vers le template.
- Déclanchant l’exécution de méthodes dans la classe du composant à la suite du déclenchement d’évènements dans le template.

Le binding permet de faciliter l’implémentation de tous ces mécanismes en rendant, par exemple, automatique :

- La mise à jour d’un élément graphique quand la valeur d’un membre a changé dans la classe du composant,
- Déclenchant l’exécution d’une méthode quand un évènement est survenu dans un élément HTML de la vue.

Ces mécanismes sont possibles grâce à la détection de changements effectuée par Angular.

1. **Différents types du Binding**

Il existe plusieurs méthodes pour effectuer le binding :

- **L’interpolation** permettant d’exécuter dans le template une expression Javascript pouvant contenir des attributs provenant de la classe du composant.
- **Le property binding** qui permet d’effectuer un binding d’un membre de la classe du composant vers le template.
- **L’event binding** permettant de déclencher un évènement dans la classe du composant à partir d’un évènement déclenché dans un objet du DOM.
- **L’attribute binding** permettant d’effectuer un binding entre l’attribut d’un élément HTML et un attribut de la classe du composant.
- **Le two-way** binding permettant à la fois l’échange de données entre la classe du composant et le template (1er sens) et le déclenchement d’évènements dans la classe du composant (2e sens).
1. **Interpolation**

C’est le binding le plus simple qui permet l’échange de données dans un sens : de la classe du composant vers le template. Il permet d’exécuter une expression et d’utiliser directement des membres ou des fonctions publiques de la classe du composant dans le template avec la syntaxe **{{ ... }}**.

Exemple :

Dans l’application ContactManager, ajoutez la variable suivante à la classe MenuComponent (src/app/menu/menu.component.ts) :

export class MenuComponent implements OnInit {

`  `user: string = "Hi Walid";

`  `constructor() { }

`  `ngOnInit(): void {

`  `}

}

La variable ‘user ‘ est une propriété de la classe MenuComponent.

Ensuite dans le template menu.component.html modifiez le menu comme suite :

<header>

`    `<div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">

`        `<nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">

`            `<a class="me-3 py-2 text-dark text-decoration-none" href="#">{{user}}</a>

`            `<a class="me-3 py-2 text-dark text-decoration-none" href="#">Ajouter</a>

`            `<a class="me-3 py-2 text-dark text-decoration-none" href="#">Liste des contacts</a>

`        `</nav>

`    `</div>

</header>

L’instruction {{user}} permet d’utiliser la valeur du membre user de la classe dans le template.

Il est possible d’exécuter une fonction et d’utiliser sa valeur de retour, par exemple:

|template|<p><a class="me-3 py-2 text-dark text-decoration-none" href="#">{{getUser()}}</a></p><p></p>|
| - | :- |
|composant|<p>export class MenuComponent implements OnInit {</p><p></p><p>`  `private user: string = "Hi Walid";</p><p></p><p>`  `constructor() { }</p><p></p><p>`  `ngOnInit(): void {</p><p>`  `}</p><p></p><p>`  `getUser():string{</p><p>`    `return this.user;</p><p>`  `}</p><p>}</p><p></p>|

On exécute la fonction getUser() pour afficher sa valeur de retour. Dans la partie entre les crochets, on peut exécuter une expression, par exemple :

<a class="me-3 py-2 text-dark text-decoration-none" href="#">{{getUser().toUpperCase()}}</a>

getUser().toUpperCase() permet de transformer les lettres du titre en majuscules.

**Travail à faire :**

Modifiez votre application pour qu’elle affiche votre prénom en majuscule.

1. **Property binding**

Le property binding permet d’échanger des données de la classe du composant vers le template. Il permet de renseigner une propriété d’un objet dans le DOM avec une valeur provenant du membre de la classe du composant. Indirectement la propriété dans le DOM se reflète sur son équivalent au niveau de la vue.

Par exemple, pour renseigner la propriété alt d’un élément HTML **img** avec un membre imgAltText du composant, le code est :

|template|<p><a class="me-3 py-2 text-dark text-decoration-none" href="#"><img [alt]='imgAltText' />{{getUser().toUpperCase()}}</a></p><p></p>|
| :- | :- |
|composant|<p>export class MenuComponent implements OnInit {</p><p></p><p>`  `private user: string = "Hi Walid";</p><p>`  `imgAltText = 'user image ';</p><p></p><p>`  `constructor() { }</p><p></p><p>`  `ngOnInit(): void {</p><p>`  `}</p><p></p><p>`  `getUser():string{</p><p>`    `return this.user;</p><p>`  `}</p><p>}</p><p></p>|
Le code **[alt]='imgAltText'** permet de renseigner la propriété alt de l’élément HTML avec la valeur du membre **imgAltText** de la classe du composant.

Ainsi :

- **[ ]** est le propriété de l’élément cible du DOM
- **' '** est la source du binding dans la classe du composant.

Avec l’interpolation, on pourrait avoir un résultat similaire en utilisant l’implémentation suivante dans le template:

<img alt='{{imgAltText}}' /> 

**Travail à faire :**

Ajoutez une balise image sans l’attribut src, mais avec l’attribut alt en affichant le message ‘Image not found’.

L’application doit afficher le menu comme suite :

1. **Attribute binding**

**L’attribute binding** est similaire au **property binding** sauf qu’on utilise la syntaxe attr.<nom de l'attribut> pour désigner l’attribut de l’élément HTML.

Ainsi pour effectuer un binding entre le membre imgAltText de la classe du composant et l’attribut alt d’un élément img, la syntaxe est :

**<img [attr.alt]='imgAltText' />**

1. **Event binding**

L’event binding permet d’exécuter du code dans la classe du composant à partir d’évènements déclenchés sur un élément du DOM.

Par exemple, pour exécuter la méthode deleteContact() dans la classe du composant à partir d’un clique sur un bouton, l’implémentation est:

|<p>Template</p><p>**(contact-list.component.html)**</p>|<p>` `<button (click)='deleteContact()' type="button" class="btn btn-danger">Delete</button></p><p></p>|
| :- | :- |
|<p>Composant</p><p></p>|<p>export class ContactListComponent implements OnInit {</p><p></p><p>`  `constructor() { }</p><p></p><p>`  `ngOnInit(): void {</p><p>`  `}</p><p></p><p>`  `deleteContact():void{</p><p>`    `confirm("Voulez-vous supprimer le contact");</p><p>`  `}</p><p>}</p><p></p><p></p>|

Ainsi l’évènement click dans le code HTML déclenche l’exécution de la méthode deleteContact(). 

Cet exemple permet de montrer l’exemple d’event binding entre un élément HTML et une méthode dans la classe du composant.

Résulat :

**Travail à faire :**

La fonction **confirm** retourne un booléen, modifiez le code de la fonction **deleteContact** pour afficher les messages suivants :

- « Contact supprimé » : si l’utilisateur clique sur le bouton « Ok »
- « Action annulé » : si l’utilisateur clique sur le bouton « Annuler »

Implémenter l’action click sur tous les boutons « Delete »

Implémenter l’action click sur tous les boutons « Delete ».

Répéter le même travail pour le bouton « Edit ».

Changer tous les textes des interface graphiques en Français.

1. **Tow way binding**

A voir dans les prochaines TPs


Résumé :

- Interpolation **: {{variable/fonction}}**, la variable ou la fonction doit être définie dans la classe du composant
- Property binding **: [property]=’variable/fonction’**, la variable ou la fonction doit être définie dans la classe du composant
- Attribute binding : [attr.attribute] =’variable/fonction’
- Event binding : (event) =’fonction’, la fonction est définie dans la classe
- Tow way binding : a voir dans les prochaines TPs

























**TP 4 : Les directives**


Objectifs :

A la fin de ce TP, l’étudiant sera capable de :

- D’utiliser les directives dans un composant
- Changer dynamiquement le contenu d’une page HTML (template)
- Modifier le comportement d’un élément HTML

1. **Présentation**

Les directives sont des classes qui ajoutent un comportement supplémentaire aux éléments de vos applications angulaires. Utilisez les directives intégrées d'Angular pour gérer les formulaires, les listes, les styles et ce que les utilisateurs voient.

Les différents types de directives angulaires sont les suivants :

- **Composants**—directives avec un modèle. Ce type de directive est le type de directive le plus courant.
- **Attribute Directives** : directives qui modifient l'apparence ou le comportement d'un élément, d'un composant ou d'une autre directive.
- **Structural Directives** : directives qui modifient la disposition du DOM en ajoutant et en supprimant des éléments DOM.

Ce TP couvre les directives d'attributs et les directives structurelles intégrées.

1. **Attribute Directives**

Les directives d'attribut écoutent et modifient le comportement d'autres éléments, attributs, propriétés et composants HTML.

Les directives d'attribut les plus courantes sont les suivantes :

- **NgClass** : ajoute et supprime un ensemble de classes CSS.
- **NgStyle** : ajoute et supprime un ensemble de styles HTML.
- **NgModel** : ajoute une liaison de données bidirectionnelle (two-way data binding) à un élément de formulaire HTML.

***2.1- NgClass***

***“Add or remove multiple CSS classes simultaneously with ngClass.”***

1. **Utiliser NgClass avec une expression**

Pour comprendre ngClass, revenant à notre application ContactManager. Si on veut par exemple appliquer le style suivant sur le champ nom d’un contact :

background-color: rgb(230, 132, 149);

font-size: 14px;

font-family: Arial, Helvetica, sans-serif;

Dans le fichier contact-list.component.css ajoutez cette classe CSS:

.myClass {

`    `background-color: rgb(230, 132, 149);

`    `font-size: 14px;

`    `font-family: Arial, Helvetica, sans-serif;

}

Ensuite, dans la classe ContactListComponent ajoutez cette variable :

` `isMarked = true;

Cette variable sera utilisée dans une expression (juste pour test).

Maintenant dans le template modifier

` `<h1 class="card-title">Walid HAMMAMI</h1> 

du premier contact comme suite :

<h1 class="card-title" [ngClass]="isMarked ? 'myClass' : ''">Walid HAMMAMI</h1>

Notez bien myClass doit être entre '', sinon elle sera traitée comme une variable.

Résultat


**Travail à faire:**

- Applique la classe CSS myClass sur le premier et le troisième contact.

1. **Utiliser NgClass avec une méthode**

Pour utiliser NgClass avec une méthode, ajoutez la méthode à la classe de composant.  Dans l’exemple suivant on va marquer les contacts amis par vert, les contacts de travail par orange et les contacts familles par bleu.

Dans la classe du composant ajoutez ce code

constructor() { 

`    `this.setMarkContact();

`  `}

`  `isMarked = true;

`  `isFriendContact = true;

`  `isFamilyContact = false;

`  `isWorkContact = true;

`  `markContact: Record<string, boolean> = {};

`  `setMarkContact(){

`    `this.markContact={

`      `friendContact : this.isFriendContact,

`      `familyContact: this.isFamilyContact,

`      `workContact: this.isWorkContact

`    `}

`  `}

Créer des classes CSS dans le fichier style du composant.

.friendContact {

`    `background-color: rgb(66, 228, 74);

`    `font-size: 14px;

`    `font-family: Arial, Helvetica, sans-serif;

}

.familyContact {

`    `background-color: rgb(52, 81, 224);

`    `font-size: 14px;

`    `font-family: Arial, Helvetica, sans-serif;

}

.workContact {

`    `background-color: rgb(236, 35, 52);

`    `font-size: 14px;

`    `font-family: Arial, Helvetica, sans-serif;

}

Enfin modifiez la balise h1 contenant le nom du contact.

<h1 class="card-title" [ngClass]="markContact">Walid HAMMAMI 22</h1>

**Travail à faire :**

- Testez le code des exemples précédentes.



***2.2- Définir des styles en ligne avec NgStyle***

Utilisez **NgStyle** pour définir plusieurs styles en ligne simultanément, en fonction de l'état du composant.

**Exemple** 

Côté composant 

markContactStyle: Record<string, string> = {};

`  `setMarkContactStyle() {

`    `this.markContactStyle = {

`      `'font-style': this.isFriendContact ? 'italic' : 'normal',

`      `'font-weight': !this.isFamilyContact ? 'bold' : 'normal',

`      `'font-size': this.isWorkContact ? '24px' : '12px' 

`    `}

`  `}

Template

<h1 class="card-title" [ngStyle]="markContactStyle">Walid HAMMAMI</h1>

1. **Afficher et mettre à jour les propriétés avec ngModel**

A voir dans les prochaines TPs (formulaire ajout/modification/paramètres…)

1. **Directives structurelles**

Les directives structurelles sont responsables de la mise en page HTML. Ils façonnent ou remodèlent la structure du DOM, généralement en ajoutant, en supprimant et en manipulant les éléments hôtes auxquels ils sont attachés.

Cette section présente les directives structurelles intégrées les plus courantes :

- **NgIf** : crée ou supprime de manière conditionnelle des sous-vues à partir du modèle.
- **NgFor** : répétez un nœud pour chaque élément d'une liste.
- **NgSwitch** : un ensemble de directives qui basculent entre des vues alternatives.

***4.1. Ajouter ou supprimer un élément avec NgIf***

Ajoutez ou supprimez un élément en appliquant une directive **NgIf** à un élément hôte. Lorsque **NgIf** est faux, Angular supprime un élément et ses descendants du DOM.

Angular se débarrasse ensuite de leurs composants, ce qui libère de la mémoire et des ressources.

**Exemple**

Dans l’application ContactManager, ajoutez cette variable à la classe MenuComponent :

isConnected = false;

ensuite dans le template modifiez le code comme suite :

<div \*ngIf='isConnected' ...>

`    `<nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">

`        `<a …><img [alt]='imgAltText' />{{getUser().toUpperCase()}}</a>

`        `<a …>Ajouter</a>

`        `<a …>Liste des contacts</a>

`    `</nav>

</div>

<div #whenFalse …>

`    `<nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">

`        `<a …>Se connecter</a>

`        `<a …>Créer un compte</a>

`        `<a …>Contactez nous</a>

`    `</nav>

</div>

Résultat :


***4.2- ngFor***

Utilisez ngFor pour afficher une liste d’éléments.

Exemple

<div \*[ngFor](https://angular.io/api/common/NgForOf)="let item of items">{{item.name}}</div>

Pour mieux comprendre ngFor. Revenant à notre application. Voici les étapes nécessaires pour rendre notre application dynamique (affichage dynamique)

- Création d’une liste de contact (dans le composant ContactListComponent)
- Changer le template en affichant la liste des contacts (contact-list.component.html)

1. **Création des données (Model)**

Créez un dossier « models » sous le dossier app, comme le montre l’image suivante :

Ensuite créez une classe Contact dans le dossier « models ». Pour créer une classe, cliquez sur le bouton droit de la sourie sur le dossier « models », puis sur « Nouveau fichier ». Nommez le fichier **contact.ts**.

Modifiez la classe comme suite :

export class Contact{

`    `firstName:string;

`    `lastName:string;

`    `email:string;

`    `type:"Friend"|"Work"|"Family";

`    `description:string;

`    `phone:string;

`    `constructor(firstName,lastName,email,type,description,phone){

`        `this.firstName = firstName;

`        `this.lastName = lastName;

`        `this.email = email;

`        `this.type = type;

`        `this.description = description;

`        `this.phone = phone;

`    `}

}

Maintenant on va créer la liste des contacts dans la classe ContactListComponant.

Tous d’abord importez la classe Contact :

import {Contact} from '../models/contact';

Ensuite, déclarez une liste de contact :

listContacts:Array<Contact>;

Enfin, remplissez la liste.

constructor() {

`    `…

`    `this.createContact();

`  `}

`  `listContacts: Array<Contact> = new Array<Contact>();

`  `createContact() {

`    `let contact = new Contact("Walid", "HAMMAMI", "walid.ham@hotmail.com", "Friend", "Amis", "98559121");

`    `this.listContacts.push(contact);

`  `}

1. Interface graphiqe (View)

Dans cette étape on va changer le template contact-list pour afficher la liste des contacts créé précédemment.

Modifiez le fichier contact-list.component.html comme suite :

<main>

`    `<div class="row row-cols-1 row-cols-md-3 mb-3 text-center">

`        `<div class="col" \*ngFor="let contact of listContacts; let i=index">

`            `<div class="card mb-4 rounded-3 shadow-sm">

`                `<div class="card-header py-3">

`                    `<h4 class="my-0 fw-normal">Contact {{i+1}}</h4>

`                `</div>

`                `<div class="card-body">

`                    `<!--h1 class="card-title" [ngClass]="isMarked ? 'myClass' : ''">Walid HAMMAMI</h1-->

`                    `<h1 class="card-title">{{contact.firstName}} {{contact.lastName}}</h1>

`                    `<ul class="list-unstyled mt-3 mb-4">

`                        `<li>Phone : {{contact.phone}}</li>

`                        `<li>Email : {{contact.email}}</li>

`                        `<li>Description : {{contact.description}}</li>

`                    `</ul>

`                    `<div class="mat-card-actions">

`                        `<button type="button" class="btn btn-primary">

`                            `Editer

`                        `</button>

`                        `<button (click)='deleteContact()' type="button" class="btn btn-danger">

`                            `Supprimer

`                        `</button>

`                    `</div>

`                `</div>

`            `</div>

`        `</div>



`    `</div>



</main>

Résultat :



***4.3- ngSwitch***

Comme l'instruction switch de JavaScript, **NgSwitch** affiche un élément parmi plusieurs éléments possibles, en fonction d'une condition. Angular met uniquement l'élément sélectionné dans le DOM.

**NgSwitch** est un ensemble de trois directives :

- **NgSwitch** : une directive d'attribut qui modifie le comportement de ses directives associées.
- **NgSwitchCase** : directive structurelle qui ajoute son élément au DOM lorsque sa valeur liée est égale à la valeur de switch et supprime sa valeur liée lorsqu'elle n'est pas égale à la valeur de switch.
- **NgSwitchDefault**—directive structurelle qui ajoute son élément au DOM lorsqu'il n'y a pas de NgSwitchCase sélectionné.

Syntaxe

<div [ngSwitch]="value">

`    `<div \*ngSwitchCase="'value\_1'" >Value 1 is OK</div>

`    `<div \*ngSwitchCase="'value\_2'" >Value 2 is OK</div>

`    `....

`    `<div \*• NgSwitchDefault="'default'" >Default value</div>

</div>

**Travail à faire :**

- Ajoutez 6 contacts : 2 amis, 2 travails et 2 familles
- Affichez les contacts amis en bleu, les contacts travails en rouge et les contacts familles en vert.















**TP 5 : Two Way Binding**

1. **Two-way binding**

Le two-way binding permet d’effectuer un binding dans plusieurs directions :

- Un **property binding** pour injecter la valeur d’un membre d’une classe de composant dans une propriété d’un composant.
- Un **event binding** permettant d’exécuter une méthode après le déclenchement d’un évènement.

On indiquera 2 cas d’application d’un two-way binding:

- Dans le cas d’un composant enfant
- Dans le cas d’un formulaire avec l’objet Angular ngModel.

1. **Composant enfant**

L’implémentation du two-way binding avec un composant enfant est possible en implémentant :

- Un paramètre d’entrée avec le décorateur **@Input()**.
- Un évènement auquel on peut s’abonner à l’extérieur du composant avec le décorateur **@Output()**. Pour que le two-way binding fonctionne, l’évènement doit s’appeler <nom du paramètre d'entrée>Change.

***2.1- Décorateurs @Input & @Output***

1. @Input

Le décorateur @Input() permet d’implémenter des paramètres d’entrée dans le composant enfant qu’on pourra initialiser à partir du composant parent.

***Exemple***

Dans l’application ContactManager on va créer un nouveau composant contact-item. Ce composant représente un seul contact.

ng g c contact-item.

Dans la classe ContactItemComponent ajoutez cette variable

@Input() contact : Contact;

Le décorateur @Input signifie que la variable contact ça valeur sera fourni par un autre composant (composant parent).

Ajouter aussi la fonction deleteContact, copiez la fonction depuis la classe ContactListComponant ( n’oubliez de supprimer après avoir copier la fonction)

deleteContact(): void {

`    `let reponse = confirm("Voulez-vous supprimer le contact");

`    `if (reponse) {

`      `alert("Contact Supprimé");

`    `} else {

`      `alert("Action annulé");

`    `}

`  `}

Maintenant modifiez le template :

<div class="card mb-4 rounded-3 shadow-sm">

`    `<div class="card-header py-3" [ngSwitch]="contact.type">

`        `<h4 class="my-0 fw-normal" \*ngSwitchCase="'Freind'" [ngClass]="'freindContact'">Contact {{i+1}}</h4>

`        `<h4 class="my-0 fw-normal" \*ngSwitchCase="'Work'" [ngClass]="'workContact'">Contact {{i+1}}</h4>

`        `<h4 class="my-0 fw-normal" \*ngSwitchCase="'Family'" [ngClass]="'familyContact'">Contact {{i+1}}</h4>

`    `</div>

`    `<div class="card-body">

`        `<!--h1 class="card-title" [ngClass]="isMarked ? 'myClass' : ''">Walid HAMMAMI</h1-->

`        `<h1 class="card-title">{{contact.firstName}} {{contact.lastName}}</h1>

`        `<ul class="list-unstyled mt-3 mb-4">

`            `<li>Phone : {{contact.phone}}</li>

`            `<li>Email : {{contact.email}}</li>

`            `<li>Description : {{contact.description}}</li>

`        `</ul>

`        `<div class="mat-card-actions">

`            `<button type="button" class="btn btn-primary">

`                `Editer

`            `</button>

`            `<button (click)='deleteContact()' type="button" class="btn btn-danger">

`                `Supprimer

`            `</button>

`        `</div>

`    `</div>

</div>

Finalement, modifiez le template contact-list.component.html :

<main>

`    `<div class="row row-cols-1 row-cols-md-3 mb-3 text-center">

`        `<div class="col" \*ngFor="let item of listContacts; let i=index">

`            `<app-contact-item [contact]='item'></app-contact-item>

`        `</div>

`    `</div>

</main>

1. @Output

Le décorateur @Output() dans un composant ou une directive enfant permet aux données de circuler de l'enfant vers le parent.



**@Output()** marque une propriété dans un composant enfant comme une porte à travers laquelle les données peuvent voyager de l'enfant au parent

Le composant enfant utilise la propriété @Output() pour déclencher un événement afin de notifier le parent du changement. 

Pour déclencher un événement, un @Output() doit avoir le type **EventEmitter**, qui est une classe dans @angular/core que vous utilisez pour émettre des événements personnalisés.

**Exemple** 

Nous allons créer un formulaire pour ajouter un nouveau contact. Le nouveau contact doit être ajouter à la liste des contacts dans la classe ContactListComponent.

Pour réaliser cette tâche suivez les étapes suivantes :

**Etape 1 : Configuration du composant enfant.**

L'exemple suivant présente un formulaire où un utilisateur peut entrer un nouveau contact et cliquer sur un <button> qui déclenche un événement.

Importer @Output et EventEmitter dans la classe de composant enfant :

import { Output, EventEmitter } from '@angular/core';











|PAGE32||Atelier Framework côté client|
| :- | :-: | :-: |
