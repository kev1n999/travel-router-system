# Servidor do projeto - Travel Router System
> Back-end do projeto para estágio de TI na MMTech
---

# Stack(Ferramentas Utilizadas)
- NodeJS
- TypeScript
- ExpressJS
- Mongoose / MongoDB
---

# Como rodar 
1. Clone o repositório
```
git clone https://github.com/kev1n999/travel-router-system
``` 
2. Acesse a pasta do servidor(back-end)
```
cd back-end
```
3. Instale as dependências
```
npm install
```
4. Crie um .env e defina as duas variáveis 
```
// Porta em que o servidor irá ouvir 
SERVER_URL=8000
// URI do seu banco de dados do MongoDB
MONGO_URI=
//
```
5. Rode o servidor
```
npm run dev
ou
npm run start
```
--- 

# Rotas Disponpíveis 
> Abaixo eu disponibilizei uma breve descrição e exemplos de uso das rotas da API
---

## Rotas de Viagens
- POST /travel (Cria uma nova viagem)
  ```
  body: { name: "viagem 1" } 
  ```
- GET /travel/:id (Consulta uma viagem específica a partir do ID dela)
  ```js
    ex de requisição: fetch(`/travel/travelId`);
  ```
- PUT /travel/:id (Atualiza uma viagem específica a partir do ID dela)
  ```js
    ex de requisição: fetch(`/travel/travelId`, {
      method: "PUT",
      body: JSON.stringify({ "name": "viagem 2" }),   
    }); // Vai atualizar o nome da viagem para "viagem 2"
  ```
- DELETE /travel/:id (Delete uma viagem específica a partir do ID dela)
  ```js
    ex de requisição: fetch('/travel/travelId', { method: "DELETE" });
  ```
---

## Rotas de Destinos
- POST /travel/:id/destinations (Cria/Adiciona um novo destino para a viagem)
  ```js
    ex de requisição: fetch('/travel/travelId/destinations', {
      method: "POST",
      body: JSON.stringify({ latitude: -3242, longitude: -3242 }) // envia latitude e longitude do destino q será criado
    });
  ```

- GET /travel/:id/destinations (Consulta todas os destinos criados dentro da viagem a partir do ID dela)
  ```js
    ex de requisição: fetch('/travel/travelId/destinations'); 
  ```

- GET /travel/:id/destinations/compare (Consulta a distância e tempo de viagem(de carro) entre 2 destinos)
    ```js
    ex de requisição: fetch('/api/travel/travelId/destinations/compare?lat_a=-23.5505&lon_a=-46.6333&lat_b=-22.9068&lon_b=-43.1729');
  ```

- DELETE /travel/:id/destinations/:destinationId (Deleta um destino de uma viagem a partir de seus IDS)
  ```js
    ex de requisição: fetch('/api/travel/travelId/destinationId', { method: "DELETE" });
  ```
  
