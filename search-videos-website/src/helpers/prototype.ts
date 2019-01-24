Object.defineProperty(Object.prototype, 'copyValue', {
  value(source) {
    if (this && source.isNotNullOrEmpty()) {
      for (const prop in this) {
        if (this.hasOwnProperty(prop) && source.hasOwnProperty(prop)) {
          this[prop] = source[prop];
        }
      }
    }
    return this;
  },
});
Object.defineProperty(Object.prototype, 'isNotNullOrEmpty', {
  value() {
    if (this && Object.keys(this).length) {
      return true;
    }
    return false;
  },
});
