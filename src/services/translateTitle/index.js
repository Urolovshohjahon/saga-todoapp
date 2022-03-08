import i18next from 'i18next';

const title = (title_uz, title_ru, title_en) => {
  let currentLangCode = i18next.languages[0];

  console.log("currentLangCode", currentLangCode)

  switch (true) {
    case (currentLangCode === 'uz' && !!title_uz):
      return title_uz;
    case (currentLangCode === 'ru' && !!title_ru):
      return title_ru;
    case (currentLangCode === 'en' && !!title_en):
      return title_en;
    default: {
      return ""
    }
  }

};


export default {
  title,
}
