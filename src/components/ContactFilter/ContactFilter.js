import css from './ContactFilter.module.css';
export function ContactFilter({ handleChange, value }) {
  return (
    <>
      <label className={css.filterLabel}>
        Find contacts by name
        <input
          className={css.filterInput}
          name="filter"
          type="text"
          value={value}
          onChange={handleChange}
        />
      </label>
    </>
  );
}
