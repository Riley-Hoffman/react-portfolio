const useValidateEmail = (email) => {
    var re =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

export default useValidateEmail;
