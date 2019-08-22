Object.defineProperties(person,'age',{
    set: function(newValue) {
        return (
    }
})

Object.defineProperties(person,'age',{
    set: function(newValue) {
        return this.birthYear + newValue;
    }
})
