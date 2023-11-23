for (let iteration = 0; iteration < 3; iteration++) {
  console.log(`outer (initial) loop #${iteration}`);

  for (let repetition = 0; repetition < 4; repetition++) {
    console.log(`inner (second/nested) loop #${repetition}`);

    for (let k = 0; k < 5; k++) {
      console.log(`innermost loop #${k}`);
    }
  }
}
