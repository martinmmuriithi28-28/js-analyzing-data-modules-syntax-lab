//  Import datejs outside the function
require("datejs");

//  Create combineUsers function with rest argument
function combineUsers(...args) {

    //  Initialize the return object
    const combinedObject = {
        users: []
    };

    //  Loop through args to get each username array
    args.forEach((userArray) => {

        //  Merge arrays using spread operator
        combinedObject.users = [
            ...combinedObject.users,
            ...userArray
        ];

    });

    //  Add today's date
    combinedObject.merge_date = Date.today().toString("M/d/yyyy");

    //  Return object
    return combinedObject;
}

// Export function for testing
module.exports = combineUsers;


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};