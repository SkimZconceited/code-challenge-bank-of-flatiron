function FormSub() {

    const handleSub = (e) => e.preventDefault();

  return (
    <div id="form-Sub">
      <h2>New Transaction Submission</h2>
      <form onSubmit={handleSub}>
        <p>Enter description: <input placeholder="Description..." /></p>
        <div id="div-category">
        <p>Choose category:</p>

        <select id="dropdown" name="fruit">
            <option value="income">Income</option>
            <option value="fashion">Fashion</option>
            <option value="food">Food</option>
            <option value="entertainment">Entertainment</option>
        </select>
        </div>
        <p>Enter amount: <input type="number" placeholder="Amount(kes)..." /></p>
        <input type="submit" value="Submit Transaction" />
      </form>
    </div>
  );
}

export default FormSub;