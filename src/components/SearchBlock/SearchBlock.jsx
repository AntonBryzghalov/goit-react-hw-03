import { Field, Formik } from "formik";

function SearchBlock({ value, onFilter }) {
  return (
    <Formik>
      <Field value={value} onChange={onFilter} />
    </Formik>
  );
}

export default SearchBlock;
