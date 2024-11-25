class Palabra:
    def __init__(self, cadena):
        self.cadena = cadena

    def contar_caracteres(self):
        mapa = {}

        for caracter in self.cadena:
            mapa[caracter] = mapa.get(caracter, 0) + 1
        print(mapa)


palabra = Palabra("¿Hola como estas?")

palabra.contar_caracteres()
