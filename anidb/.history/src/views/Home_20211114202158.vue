<template>
	<div class="app">
		<header>
			<h1>The<strong>Anime</strong>Database</h1>

			<form class="search-box" @submit.prevent="HandleSearch">
				<input 
					type="search" 
					class="search-field" 
					placeholder="Search for an anime..."
					required
					v-model="search_query" />
			</form>
		</header>
		<main>
			<div class="cards" v-if="animelist.length > 0">
				<Card 
					v-for="anime in animelist" 
					:key="anime.mal_id"
					:anime="anime" />
			</div>
			<div class="no-results" v-else>
				<h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat totam reiciendis consectetur praesentium eaque, quidem impedit repellendus aut sed vero? Expedita ducimus nemo similique maxime soluta natus ea perspiciatis sed et libero repellendus, illo repudiandae delectus esse magnam nam sint itaque eaque blanditiis quasi ex eius quis. Fugit voluptatibus, officiis pariatur similique corrupti asperiores, quos amet facilis architecto distinctio iste non dolore nemo! Laborum ipsam sit placeat ea provident reiciendis corrupti ad sed, natus cupiditate, qui quos? Dolor est ullam commodi incidunt harum, eveniet accusantium reiciendis iusto nesciunt similique cum porro architecto et quam, blanditiis nulla pariatur eos nihil explicabo excepturi? Esse aperiam, et maxime possimus temporibus nam dolore rem ipsa, minus hic ullam quisquam at laborum enim nisi suscipit voluptatem quia mollitia in itaque libero! Aut quo esse doloribus omnis id libero excepturi iure repudiandae, quas eum delectus dolorem ipsa officia ducimus rerum amet sint magni dignissimos commodi tempora! Delectus minima nesciunt minus dolores maiores porro vel dolore ex, doloremque ut, quas libero quasi accusantium cumque animi harum veritatis explicabo, laborum vitae? Incidunt, reiciendis hic atque, pariatur blanditiis sint temporibus impedit eius enim maiores nobis voluptatibus quos ipsa recusandae optio non fuga natus sapiente iure quasi, iusto porro ullam sequi cumque. Assumenda facere fugit recusandae doloribus aspernatur nesciunt qui ullam tempora mollitia nulla odio expedita nostrum est quibusdam voluptatem, a inventore, similique dolor accusamus praesentium, asperiores sint omnis officiis? Mollitia deleniti nemo, corrupti necessitatibus sequi at aperiam a magnam suscipit, porro quod eius eum quibusdam perferendis aut molestiae labore! Laborum non vitae nisi laboriosam! Itaque nulla aliquam, dicta non et aliquid officiis cumque ad accusantium iure nisi consectetur est iusto illo dolorum temporibus saepe debitis harum maxime id. Deserunt commodi sit labore, quasi iste neque doloremque tenetur? Eius dicta eos debitis asperiores. Vero qui alias voluptate? Dignissimos, laboriosam nisi. Molestiae fugit rerum, omnis, quis ut ab numquam maxime magni sequi atque debitis maiores iure incidunt, voluptates ipsam ratione optio natus nulla explicabo dolorem praesentium nisi? Obcaecati, optio eveniet fugiat rem est vitae ex commodi, aperiam eum pariatur non, nihil necessitatibus! Sed provident, voluptatum nam ducimus nulla nesciunt expedita eligendi quos sunt, ex temporibus sapiente maiores accusantium, labore at recusandae natus non. Consequatur, aspernatur quod. Eius sed beatae sunt porro incidunt cumque molestias nemo odit fugit laborum modi, qui reiciendis rerum eos ullam quas praesentium libero. Numquam omnis ab temporibus recusandae, in velit? Iusto odio veniam assumenda. Alias placeat consequatur obcaecati illum ea nisi numquam veritatis iste quia? Error perferendis ad debitis placeat adipisci culpa aut corrupti dolores nemo. Numquam quas repellendus laborum quaerat cumque blanditiis sit ducimus nemo obcaecati minima, animi eveniet velit fuga deserunt soluta nam sequi voluptas ea praesentium nostrum eos id at! Inventore perferendis perspiciatis quaerat quibusdam nihil praesentium libero, ad atque fugiat aspernatur minima officiis alias quae doloremque voluptas nam dignissimos. Voluptatum libero quia obcaecati eos quae consequatur in perferendis ratione repellat beatae molestias quos provident ex debitis excepturi consectetur nihil sunt consequuntur, corporis eius rem velit incidunt ipsum. Illum voluptate earum iure possimus molestiae.</h3>
			</div>
		</main>
	</div>
</template>

<script>
import { ref } from 'vue';
import Card from '@/components/Card.vue';

export default {
	setup() {
		const search_query = ref("");
		const animelist = ref([]);

		const HandleSearch = async () => {
			animelist.value = await fetch(`https://api.jikan.moe/v3/search/anime?q=${search_query.value}`)
				.then(res => res.json())
				.then(data => data.results);
			search_query.value = "";
		}

		return {
			search_query,
			animelist,
			HandleSearch
		}
	},
	components:{
		Card
	}
}
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira Sans', sans-serif;
}
a {
	text-decoration: none;
}
header {
	padding-top: 50px;
	padding-bottom: 50px;
	h1 {
		color: #888;
		font-size: 42px;
		font-weight: 400;
		text-align: center;
		text-transform: uppercase;
		margin-bottom: 30px;
		strong {
			color: #313131;
		}
		&:hover {
			color: #313131;
		}
	}
	.search-box {
		display: flex;
		justify-content: center;
		padding-left: 30px;
		padding-right: 30px;
		.search-field {
			appearance: none;
			background: none;
			border: none;
			outline: none;
			background-color: #F3F3F3;
			box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
			display: block;
			width: 100%;
			max-width: 600px;
			padding: 15px;
			border-radius: 8px;
			color: #313131;
			font-size: 20px;
			transition: 0.4s;
			&::placeholder {
				color: #AAA;
			}
			&:focus, &:valid {
				color: #FFF;
				background-color: #313131;
				box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
			}
		}
	}
}
main {
	max-width: 1200px;
	margin: 0 auto;
	padding-left: 30px;
	padding-right: 30px;
	.cards {
		display: flex;
		flex-wrap: wrap;
		margin: 0 -8px;
	}
}
</style>