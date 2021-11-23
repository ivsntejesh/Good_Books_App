import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const booksByGenre = {
    classic: [
      [
        "To Kill a Mockingbird",
        "4.28/5",
        "To Kill a Mockingbird is a novel by the American author Harper Lee. It has become a classic of modern American literature, winning the Pulitzer Prize."
      ],
      [
        "Pride and Prejudice",
        "4.27/5",
        "It is an 1813 novel of manners written by Jane Austen. Though it is mostly called a romantic novel, it is also a satire."
      ],
      [
        "1984",
        "4.19/5",
        "Nineteen Eighty-Four is a dystopian social science fiction novel and cautionary tale written by English writer George Orwell."
      ],
      [
        "The Great Gatsby",
        "3.98/5",
        "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan."
      ]
    ],
    comic: [
      [
        "Astro City",
        "3.8/5",
        "Kurt Busiek's Astro City is an American superhero anthology comic book series centered on a fictional American city of that name."
      ],
      [
        "Batman: The Dark Knight Returns",
        "4.3/5",
        "The Dark Knight Returns is a 1986 four-issue comic book miniseries starring Batman, written by Frank Miller."
      ],
      [
        "Batman: Arkham Asylum",
        "4.5/5",
        "Arkham Asylum: A Serious House on Serious Earth is a Batman graphic novel written by Grant Morrison and illustrated by Dave McKean."
      ],
      [
        "City of Glass",
        "4.4/5",
        "City of Glass is the third book in the urban fantasy series."
      ]
    ],
    mystery: [
      [
        "Gone Girl",
        "4.09/5",
        "Gone Girl is a 2012 crime thriller novel by American writer Gillian Flynn. The novel became popular and made the New York Times Best Seller list."
      ],
      [
        "The Girl on the Train",
        "3.94/5",
        "The Girl on the Train is a 2015 psychological thriller novel by British author Paula Hawkins that gives narratives from three different women about relationship troubles and binge drinking. "
      ],
      [
        "11/22/63",
        "4.30/5",
        "11/22/63 is a novel by Stephen King about a time traveller who attempts to prevent the assassination of United States President John F. Kennedy, which occurred on November 22, 1963."
      ]
    ],
    horror: [
      [
        "The Shining",
        "4.24/5",
        "The Shining is a 1977 horror novel by American author Stephen King. It is King's third published novel and first hardback bestseller; its success firmly established King as a preeminent author in the horror genre."
      ],
      [
        "It",
        "4.3/5",
        "It is a 1986 horror novel by American author Stephen King. It was his 22nd book and his 17th novel written under his own name. The story follows the experiences of seven children as they are terrorized by an evil entity that exploits the fears of its victims to disguise itself while hunting its prey."
      ],
      [
        "Dracula",
        "4/5",
        "Dracula is a novel by Bram Stoker, published in 1897. As an epistolary novel, the narrative is related through letters, diary entries, and newspaper articles. It has no single protagonist, but opens with solicitor Jonathan Harker taking a business trip to stay at the castle of a Transylvanian noble, Count Dracula."
      ],
      [
        "Pet Semantary",
        "4.01/5",
        "Pet Sematary is a 1983 horror novel by American writer Stephen King. The novel was nominated for a World Fantasy Award for Best Novel in 1986, and adapted into two films: one in 1989 and another in 2019. In November 2013, PS Publishing released Pet Sematary in a limited 30th-anniversary edition."
      ]
    ]
  };
  const [card, updateCard] = useState(booksByGenre["classic"]);
  function updateContent(t) {
    updateCard(booksByGenre[t]);
  }
  return (
    <div className="App">
      <div>
        <h1>
          <span role="img">📚</span> goodbooks
        </h1>
        <p>Checkout my favorite books. Select a genre to get started.</p>
        <div>
          <button onClick={() => updateContent("classic")}>classic</button>
          <button onClick={() => updateContent("comic")}>comic</button>
          <button onClick={() => updateContent("mystery")}>mystery</button>
          <button onClick={() => updateContent("horror")}>horror</button>
          <hr></hr>
        </div>
        <div className={"itemHolder"}>
          {card.map(function (item) {
            return (
              <div className={"innerDiv"} key={item[0]}>
                <h4>{item[0]}</h4>
                <p>{item[1]}</p>
                <p>{item[2]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
