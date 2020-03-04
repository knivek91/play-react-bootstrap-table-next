export const appColumns = [
  {
    dataField: "name",
    text: "Product Name"
  },
  {
    dataField: "gender",
    text: "Gender",
    editable: false
  },
  {
    dataField: "skin_color",
    text: "Skin Color",
    editable: false
  },
  {
    dataField: "birth_year",
    text: "Birth Year"
  }
];

export const getURL = () => {
  const API_PEOPLE = "https://swapi.co/api/people/";
  const page = Math.floor(Math.random() * 9) + 1;

  return `${API_PEOPLE}?page=${page}`;
};

export const mapToProps = data =>
  data.map((d, i) => ({
    index: i,
    name: d.name,
    gender: d.gender,
    skin_color: d.skin_color,
    birth_year: d.birth_year
  }));

export const isEmpty = (value = "") => (value.length === 0 ? true : false);
