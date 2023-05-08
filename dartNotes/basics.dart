String stringify(int x, int y) { 
  return '$x $y';// === `${x} ${y}`
}
String stringifyAddition(int x, int y) { 
  return '${x + y}';
}

// int a = null; // INVALID in null-safe Dart.

int? b = null; // Valid in null-safe Dart.
// Alternativly you cans just do:
int? c;
void exampleHelper(){
  int? d;
  // the ??= is a check if the item is null.
  // if "d" is null will now be "3".
  d ??= 3;
// prints 3
  print(d);
  d ??= 5;
// Will Still Print 3 cause d is not null anymore. 
  print(d);
}
void anotherExample(int? example){
  print(1 ?? 3); // <-- Prints 1.
  print(example ?? 12); // <-- Prints 12.

}

String? foo = 'a string';
String? bar; // = null

String? baz = foo ?? bar;

void updateSomeVars() {
  bar ??= 'a string';

  print(bar);
}


void nullProtection(Object? myObject){
  // will return null if myObject is null it's self.
  myObject?.toString();
}
