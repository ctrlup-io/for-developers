export type Member = {
  src: string;
  title: string;
  subtitle: string;
};

const members: Member[] = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/portrait-of-smiling-female-hiker-holding-hiking-stick-looking-at-camera%20(1).jpg?alt=media&token=043c6a31-6738-4b5b-a14a-1ddf88d40ef4",
    title: "Amandine B.",
    subtitle: "Test Manager",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/IMG_20211217_141036_Bokeh_2.jpg?alt=media&token=33e5ca67-f6dd-43d8-a682-235f02be3c30",
    title: "Célia D.",
    subtitle: "Développeuse",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/darryl.png?alt=media&token=aa530810-0800-496c-8c74-799cf8b30303",
    title: "Darryl N.",
    subtitle: "Développeur",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/original_97650e0d-1cc6-47df-ad5f-a4a7efb6de08_IMG_20211217_140622_Bokeh_2.jpg?alt=media&token=ed5f425c-da61-4f34-b1f2-6a0d699ac40d",
    title: "Kévin H.",
    subtitle: "Directeur Général",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/lea.png?alt=media&token=f04f0825-14dd-4cca-a6e4-df4f3c3d5dea",
    title: "Léa E.",
    subtitle: "Développeuse",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/maelle.png?alt=media&token=7b802371-5329-464a-a90f-38c1670a8594",
    title: "Maëlle H.",
    subtitle: "Business et Team Manager",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/ashwini-chaudhary-qBmvwGsxqlc-unsplash%20(1).jpg?alt=media&token=7c86fe70-0a58-48c6-ae72-6e4f355f82b3",
    title: "Maxime F.",
    subtitle: "Développeur",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/original_28152831-3700-44e8-92ae-527759af7f29_IMG_20211217_140837_Bokeh_2.jpg?alt=media&token=7b147186-73c4-4b12-8743-2362f26a3d07",
    title: "Nicolas G.",
    subtitle: "Développeur",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/IMG_20211217_140935_Bokeh_3.jpg?alt=media&token=2f460417-e90c-46b4-96d8-a5fa801cdc2f",
    title: "Pascal G.",
    subtitle: "Développeur",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/ashwini-chaudhary-qBmvwGsxqlc-unsplash%20(1).jpg?alt=media&token=7c86fe70-0a58-48c6-ae72-6e4f355f82b3",
    title: "Sylvain C.",
    subtitle: "Développeur",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/IMG_20211217_141232_Bokeh_2.jpg?alt=media&token=5d967d5f-886a-45d2-b914-ad83995a736d",
    title: "Valentin B.",
    subtitle: "Directeur Technique",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/ashwini-chaudhary-qBmvwGsxqlc-unsplash%20(1).jpg?alt=media&token=7c86fe70-0a58-48c6-ae72-6e4f355f82b3",
    title: "Valentin C.",
    subtitle: "Développeur",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/developer-website-6b974.appspot.com/o/victor.png?alt=media&token=db31de3f-c4e2-4e86-8fd8-833d4062252a",
    title: "Victor A.",
    subtitle: "Développeur",
  },
];

function shuffle(data: any[]): any[] {
  return [...data].sort(() => Math.random() - 0.5);
}

export default function getMembers(): Member[] {
  return shuffle(members);
}
