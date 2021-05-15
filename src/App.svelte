<script>
	export let name;

	import ProgramDetails from "./ProgramDetails.svelte";
</script>

<main>

	<div class="container">
		<h1>Hello {name}!</h1>
		<ProgramDetails />
	</div>
</main>

<style>
	.container {
		width: 1140px;
		margin: 0 auto;
		border: 1px solid black;
		padding: 1rem;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>