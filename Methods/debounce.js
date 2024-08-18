const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };
  const log = () => console.log('Function called');
  const debouncedLog = debounce(log, 1000);
  debouncedLog();
  debouncedLog();
  debouncedLog();
  debouncedLog();
  