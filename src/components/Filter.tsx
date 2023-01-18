export default function Filter() {
  return (
    <form action="post">
      <label htmlFor="all-field">Все</label>
      <input type="radio" name="all" id="all-field" />
      <label htmlFor="designers-field">Designers</label>
      <input type="radio" name="designers" id="designers-field" />
      <label htmlFor="analysts-field">Analysts</label>
      <input type="radio" name="managers" id="analysts-field" />
      <label htmlFor="managers-field">Managers</label>
      <input type="radio" name="managers" id="managers-field" />
      <label htmlFor="ios-field">iOS</label>
      <input type="radio" name="ios" id="ios-field" />
      <label htmlFor="android-field">Android</label>
      <input type="radio" name="android" id="android-field" />
    </form>
  );
}
