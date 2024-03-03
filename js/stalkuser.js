const stalk = () => {
  async function profileOf(user) {
    const response = await fetch(`https://api.github.com/users/${user}`);
    console.log(response);
  }
};
export default stalk;
