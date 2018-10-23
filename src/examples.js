const componentExample = `<Button buttonStyle={{
  background: '#3498db',
  border: 0,
  borderRadius: 3,
  boxShadow: '0px 5px 0px #2980b9',
  color: 'white',
  display: 'block',
  fontSize: 14,
  fontWeight: 'bold',
  margin: "20px auto",
  minWidth: 200,
  outline: 0,
  padding: 10
}}>
  <p>My Button</p>
</Button>`;

const contextExample = `<DebugInfo></DebugInfo>`;
const es6Example = `
const foo = function* (x) {
  const y = yield x + 1;

  return y + 2;
}

const bar = foo(3);

console.log(bar.next().value);
console.log(bar.next(5).value);

const end = [3, 4];

console.log([1, 2, ...end]);

const a = "a";
const b = "b";

console.log({a, b});
console.log(["a", "b"]);
console.log("a");
console.log(function () {});
console.log(null);
console.log(undefined);
`;

export { componentExample, contextExample, es6Example };
