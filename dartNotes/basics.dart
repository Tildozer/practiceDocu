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