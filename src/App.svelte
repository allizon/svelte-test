<script>
	import { ProgramDetailsData } from "./store";
	import ProgramDetails from "./ProgramDetails.svelte";

	$: programName = `PROGRAM: ${$ProgramDetailsData.commandName} (${$ProgramDetailsData.network})`;
	$: {
		console.log('-----');
		console.log($ProgramDetailsData)
	}
</script>

<main>
	<div class="container">
		<h1>{programName}</h1>
		<ProgramDetails />
	</div>

	<div class="debug">
		{JSON.stringify($ProgramDetailsData)}
	</div>
</main>

<style>
	.container {
		width: 1140px;
		margin: 0 auto;
	}

	.debug {
		padding: 2rem 0;
		font-family: monospace;
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