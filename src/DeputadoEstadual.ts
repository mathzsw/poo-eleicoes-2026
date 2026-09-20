export class DeputadoEstadual {
	private preenchimentoAutomaticoAtivo = false;

	public habilitarPreenchimentoAutomatico(): void {
		this.preenchimentoAutomaticoAtivo = true;
	}

	public desativarPreenchimentoAutomatico(): void {
		this.preenchimentoAutomaticoAtivo = false;
	}

	public isPreenchimentoAutomaticoAtivo(): boolean {
		return this.preenchimentoAutomaticoAtivo;
	}
}
