Zadanie 1.
Napisz funkcję przetwarzającą tablicę obiektów osób.
Funkcja powinna generować pseudonim na podstawie określonych
zasad i dodawać go do każdego obiektu osoby, gdy jest to możliwe.
Nie nadpisuj danych wejściowych.
Wytyczne:
Pobierz trzy ostatnie trzy litery imienia, odwróć ich kolejność i zapisz wynik
Weź pierwsze trzy litery nazwiska, zamień miejscami pierwszą
i trzecią literę, i dodaj to do wyniku z poprzedniego punktu 
Sformatuj połączony wynik tak, aby pseudonim zaczynał się
od wielkiej litery, a reszta liter była mała.
Dodaj ten pseudonim jako nową właściwość do obiektu osoby.
Jeśli firstName lub lastName ma mniej niż trzy znaki
(pomiń znaki białe) lub nie jest typu string, nie dodawaj
właściwości pseudonimu dla tej osoby.

Zadanie 2.
Stwórz funkcję, która przetworzy tablicę osób z pierwszego zadania
(Należy wykorzystać wynik wywołania funkcji z pierwszego zadania),
zwracając tylko osoby, które mają przypisany pseudonim oraz dodając
nowe pole age do każdej osoby.
Wytyczne:
Filtruj tablicę, aby zawierała tylko osoby z pseudonimem. 
Oblicz liczbę liter w imieniu i nazwisku każdej osoby.
Jeśli suma liter jest parzysta, przypisz ją jako age.
Jeśli nieparzysta, age oblicz jako sumę liter w kluczach
firstName , lastName i nickname pobieranych dynamicznie
podzieloną przez indeks osoby w tablicy ( jeżeli index
wynosi 0 zastąp go 1 ). Użyj odpowiedniej metody do
wyciagnięcia kluczy z obiektu oraz reduce w
notacji łańcuchowej do zliczenia liter w kluczach.

Dodaj pole age do każdego obiektu osoby.

Zadbaj o to by wiek był zaokrąglony w górę
(odszukaj potrzebnej informacji w internecie).

Zadanie 3.
Stwórz funkcję, która analizuje tablicę osób z drugiego
zadania i znajduje najczęściej występującą literę w polach
firstName, lastName oraz nickname dla każdej osoby.
Wynik powinien zawierać literę i jej liczbę wystąpień,
a także określić, co zrobić w przypadku, gdy dwie litery mają tę samą liczbę wystąpień.

Wytyczne:

Przetwarzaj każdy obiekt osoby, analizując pola firstName,
lastName, i nickname.

Zliczaj wystąpienia każdej litery w tych polach i znajdź
najczęściej występującą literę.

Jeżeli dwie lub więcej liter mają tę samą liczbę wystąpień
i jest to najwyższa wartość, wybierz literę, która występuje
pierwsza w alfabecie.

Zwróć nową tablicę z obiektami, które zawierają imię, nazwisko, pseudonim oraz dodaj nową właściwość do każdej osoby o nazwie mostCommonLetter, której wartością będzie obiekt z kluczem litery oraz ilością jej wystąpień.