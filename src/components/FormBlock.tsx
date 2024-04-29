function FormBlock() {
  return (
    <div className="formBlock">
      <form className="formBlock--form">
        <input
          className="formBlock--input"
          type="text"
          placeholder="Please, enter city."
          autoComplete="off"
          spellCheck="false"
          required
        />

        <button className="formBlock--btn" type="submit">
          <svg className="formBlock--img w-[16px] h-[16px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
          </svg>
        </button>
      </form>
    </div>
  )
}

export default FormBlock