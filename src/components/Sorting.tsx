export default function Sorting() {
  return (
    <>
      <label htmlFor="alphaber-sorting">По алфавиту</label>
      <input type="radio" name="alphabet" id="aplhabet-sorting" />
      <label htmlFor="birthday-sorting">По дню рождения</label>
      <input type="radio" name="birthday" id="birthday-sorting" />
    </>
  );
}
