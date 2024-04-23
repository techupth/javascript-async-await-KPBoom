// Exercise #5
let getJohnProfile = async () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here
async function getData(){
  try{
  const U = await getJohnProfile();
  console.log(U);
  } catch (error){
  const er = await getJohnProfile();
  console.log(er);
  }
} 
  getData();