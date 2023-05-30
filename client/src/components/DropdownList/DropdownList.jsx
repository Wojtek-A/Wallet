import css from "./DropdownList.module.css";
const DropdownList = ({ data }) => {
  return (
    <>
      {data.map((element, index) => (
        <li key={index} className={css.item}>
          {element}
        </li>
      ))}
    </>
  );
};

export default DropdownList;
