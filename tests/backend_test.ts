

Feature('Tarea 1, asersiones con API GET tipo REST y GRAPHQL')

Scenario('Prueba con API REST tipo GET', async ({ I }) => {
	const response = await I.sendGetRequest(
		'https://pokeapi.co/api/v2/berry/cheri'
	)
	// Validamos la firmesa de la baya cheri sea suave
	I.assertEqual(response?.data?.firmness?.name, "soft")
	//Validamos que el primer sabor sea picante
	I.assertEqual(response?.data?.flavors?.[0]?.flavor?.name, "spicy")

})

Scenario('Pturba de consulta a API GRAPHQL', async ({ I }) => {
	const response = await I.sendQuery(
		`
		query getBerryByName($berry:String!) {
				berry(berry: $berry) {
					message,
    			response
          
				}
}
  `,
		{
  			"berry":"cheri"
		}
	)

	// Validamos el codigo de respuesta correcto y no regresa nada
	I.assertEqual(response?.status, 200)
	I.assertEqual(response?.data?.data?.berry?.response?.firmness?.name, "soft")
	//Validamos que el primer sabor sea picante
	I.assertEqual(response?.data?.data?.berry?.response?.flavors?.[0]?.flavor?.name, "spicy")
})
