class Listas:
    def __init__(self, lista_1, lista_2):
        self.lista_1 = lista_1
        self.lista_2 = lista_2

    def buscar_comunes(self):
        set_lista_1 = set()
        set_comunes = set()

        for elemento in self.lista_1:
            set_lista_1.add(elemento)

        for elemento in self.lista_2:
            if elemento in set_lista_1:
                set_comunes.add(elemento)
        return list(set_comunes)


listas = Listas([1, 2, 3, 4, 5], [3, 4, 5, 6, 7, 3])

print(listas.buscar_comunes())
