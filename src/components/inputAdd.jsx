function InputAdd({ onChange, value, onAdd }) {
    return (
      <div>
        <input
          onChange={onChange}
          type='text'
          className='border-2 border-gray-300 p-1 m-3'
          value={value}
          placeholder='Add a new task...'
        />
        <button onClick={onAdd} className='bg-blue-500 text-white p-2 rounded-lg'>
          Add
        </button>
      </div>
    );
  }
  
  export default InputAdd;
  