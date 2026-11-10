// Dados dos Enfeites de Natal Predefinidos (SVGs/Ícones)

  
const PRESET_ORNAMENTS = [
            {
                id: 'santa_1',
                name: 'Papai Noel 1',
                svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow"><circle cx="50" cy="50" r="42" fill="#d97706"/><path d="M25,45 Q50,15 75,45 Z" fill="#dc2626"/><circle cx="50" cy="20" r="8" fill="#ffffff"/><rect x="25" y="42" width="50" height="10" rx="5" fill="#ffffff"/><circle cx="50" cy="58" r="16" fill="#fde047"/><circle cx="43" cy="54" r="3" fill="#000"/><circle cx="57" cy="54" r="3" fill="#000"/><path d="M35,60 C35,85 65,85 65,60 Z" fill="#ffffff"/></svg>`
            },
            {
                id: 'reindeer',
                name: 'Renas',
                img: 'mascote.png',
                svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow"><circle cx="50" cy="50" r="42" fill="#92400e"/><path d="M30,30 L20,15 M20,20 L30,22 M70,30 L80,15 M80,20 L70,22" stroke="#eeeeee" stroke-width="5" stroke-linecap="round"/><circle cx="50" cy="55" r="22" fill="#b45309"/><circle cx="42" cy="50" r="3" fill="#000"/><circle cx="58" cy="50" r="3" fill="#000"/><circle cx="50" cy="62" r="8" fill="#dc2626"/></svg>`
            },
            {
                id: 'santa_2',
                name: 'Papai Noel 2',
                svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow"><circle cx="50" cy="50" r="42" fill="#b91c1c"/><ellipse cx="50" cy="45" rx="20" ry="15" fill="#fde047"/><circle cx="44" cy="42" r="3.5" fill="#000"/><circle cx="56" cy="42" r="3.5" fill="#000"/><circle cx="50" cy="48" r="5" fill="#ef4444"/><path d="M30,48 Q50,85 70,48 Z" fill="#ffffff"/><path d="M20,32 Q50,10 80,32" stroke="#ffffff" stroke-width="8" fill="none"/></svg>`
            },
            {
                id: 'bell',
                name: 'Sino',
                svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow"><circle cx="50" cy="50" r="42" fill="#15803d"/><path d="M50,20 C35,20 32,50 25,65 L75,65 C68,50 65,20 50,20 Z" fill="#eab308"/><rect x="23" y="63" width="54" height="8" rx="4" fill="#ca8a04"/><circle cx="50" cy="74" r="7" fill="#b45309"/><path d="M35,25 Q50,35 65,25" stroke="#dc2626" stroke-width="6" fill="none"/></svg>`
            },
            {
                id: 'bauble_red',
                name: 'Bola Vermelha',
                svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow"><rect x="44" y="10" width="12" height="10" fill="#ca8a04"/><circle cx="50" cy="55" r="38" fill="#dc2626"/><path d="M20,45 Q50,70 80,45 Q50,85 20,45 Z" fill="#b91c1c" opacity="0.6"/><circle cx="38" cy="38" r="7" fill="#ffffff" opacity="0.4"/></svg>`
            },
            
{
    id: 'brick_1',
    name: 'Tijolo',
    svg: `
        <svg viewBox="0 0 200 110" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="brickColor" x1="0" y1="0" x2="0.8" y2="1">
                    <stop offset="0%" stop-color="#c96b4d"/>
                    <stop offset="45%" stop-color="#a74730"/>
                    <stop offset="100%" stop-color="#713323"/>
                </linearGradient>

                <filter id="texture">
                    <feTurbulence type="fractalNoise"
                        baseFrequency=".07" numOctaves="3" seed="8"/>
                    <feColorMatrix type="saturate" values="0"/>
                    <feComponentTransfer>
                        <feFuncA type="table" tableValues="1 1"/>
                    </feComponentTransfer>
                    <feBlend in="SourceGraphic" mode="multiply"/>
                </filter>
            </defs>

            <!-- Sombra -->
            <rect x="9" y="14" width="184" height="90"
                rx="5" fill="#7c3727"/>

            <!-- Corpo do tijolo -->
            <rect x="7" y="7" width="184" height="88"
                rx="5" fill="url(#brickColor)" 
                " stroke="#8c3625" stroke-width="3"
                />

            <!-- Iluminação -->
            <path d="M12 13 Q100 5 186 13"
                stroke="#f0a0807e" stroke-width="4"
                fill="none"/>

            <!-- Imperfeições escuras -->
            <g fill="#823b2b">
                <ellipse cx="35" cy="27" rx="8" ry="3"/>
                <ellipse cx="145" cy="24" rx="5" ry="2"/>
                <ellipse cx="80" cy="77" rx="10" ry="3"/>
                <circle cx="165" cy="63" r="3"/>
                <circle cx="24" cy="58" r="2"/>
            </g>

            <!-- Imperfeições claras -->
            <g fill="#e99a78">
                <circle cx="55" cy="18" r="2"/>
                <ellipse cx="120" cy="48" rx="7" ry="2"/>
                <circle cx="175" cy="82" r="2"/>
                <circle cx="44" cy="86" r="2"/>
            </g>

            <!-- Marcas da superfície -->
            <path d="M20 45 l12 -2 M100 30 l15 2
                M145 72 l12 -3 M65 60 l8 2"
                stroke="#54271e" stroke-width="1.5"
                fill="none"/>
        </svg>
    `
},
        {
                id: 'santa_3',
                name: 'Papai Noel 3',
                svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow"><circle cx="50" cy="50" r="42" fill="#991b1b"/><path d="M30,50 L70,50 L50,90 Z" fill="#ffffff"/><circle cx="50" cy="45" r="16" fill="#fde047"/><circle cx="44" cy="42" r="2.5" fill="#000"/><circle cx="56" cy="42" r="2.5" fill="#000"/><path d="M20,30 L80,30 L50,5 Z" fill="#dc2626"/></svg>`
            },
            {
                id: 'star',
                name: 'Estrela',
                svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow"><polygon points="50,5 64,36 98,36 70,57 81,91 50,70 19,91 30,57 2,36 36,36" fill="#facc15" stroke="#ca8a04" stroke-width="4"/></svg>`
            },
            {
                id: 'gift',
                name: 'Presente',
                svg: `<svg viewBox="0 0 100 100" class="w-full h-full drop-shadow"><rect x="20" y="35" width="60" height="50" rx="6" fill="#0284c7"/><rect x="15" y="25" width="70" height="15" rx="4" fill="#38bdf8"/><rect x="44" y="25" width="12" height="60" fill="#dc2626"/><path d="M35,15 C35,5 48,15 50,25 C52,15 65,5 65,15 C65,25 50,25 50,25 Z" fill="#dc2626"/></svg>`
            }
        ];

        // Armazenamento de Estado para os enfeites selecionados pelo usuário nos espaços (1 a 9)
        // Valores: { type: 'preset'|'custom', value: svgHTML ou imgURL }
        const treeSlotsState = {};
        let activeSlotId = null;

        // Inicializador ao Carregar a Janela
        window.onload = function() {
            renderPresetPalette();
        };

        // Renderiza a Paleta Predefinida no Painel Direito do Editor
        function renderPresetPalette() {
            const container = document.getElementById('preset-palette-grid');
            container.innerHTML = '';

            PRESET_ORNAMENTS.forEach(item => {
                const btn = document.createElement('button');
                btn.className = 'bg-[#2a2a2a] hover:bg-[#383838] p-2.5 rounded-xl border border-gray-700 hover:border-amber-400 transition-all flex flex-col items-center justify-center aspect-square group cursor-pointer';
                btn.onclick = () => selectPresetOrnament(item);
                btn.innerHTML = `
                    <div class="w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-transform flex items-center justify-center">
                        ${item.svg}
                    </div>
                `;
                container.appendChild(btn);
            });
        }

        // Navegação entre os Estágios (1: Início, 2: Editor, 3: Visualização Final)
  function goToStage(stageNum) {

    if (stageNum === 3) {
        renderFinalTree();
    }

    // Apaga completamente a etapa 1
    if (stageNum === 2) {
        document.getElementById('stage-1').remove();
    }

    document.getElementById('stage-2').style.display = 'none';
    document.getElementById('stage-3').style.display = 'none';

    const currentStage = document.getElementById(`stage-${stageNum}`);
    currentStage.style.display = 'flex';

    window.scrollTo(0, 0);
}

        // Abre o Espaço para Edição
        function openOrnamentSelector(slotId) {
            activeSlotId = slotId;

            // Atualiza o destaque de todos os círculos de hotspot
            document.querySelectorAll('.slot-circle').forEach(el => {
                el.classList.remove('ring-4', 'ring-amber-400', 'border-amber-400');
            });

            const currentCircle = document.querySelector(`[data-slot-id="${slotId}"]`);
            if (currentCircle) {
                currentCircle.classList.add('ring-4', 'ring-amber-400', 'border-amber-400');
            }

            // Atualiza o texto do rótulo e o estado do botão de remover
            document.getElementById('current-slot-label').innerText = `Bola #${slotId}`;
            const removeBtn = document.getElementById('btn-remove-ornament');

            if (treeSlotsState[slotId]) {
                removeBtn.classList.remove('hidden');
            } else {
                removeBtn.classList.add('hidden');
            }

            showToast(`Posição #${slotId} selecionada. Escolha um enfeite!`);
        }

        // Seleciona um Enfeite Predefinido para o espaço ativo
        function selectPresetOrnament(item) {
            if (!activeSlotId) {
                showToast('Clique em um círculo branco na árvore primeiro!');
                return;
            }

            treeSlotsState[activeSlotId] = {
                type: 'preset',
                value: item.svg
            };

            renderSlotContent(activeSlotId);
            document.getElementById('btn-remove-ornament').classList.remove('hidden');
            showToast(`Enfeite adicionado na posição #${activeSlotId}!`);
        }

        // Aciona a entrada de foto personalizada da Galeria
        function triggerFileUpload() {
            if (!activeSlotId) {
                showToast('Clique em um círculo branco na árvore primeiro!');
                return;
            }
            document.getElementById('user-photo-input').click();
        }

        // Manipula a imagem enviada da galeria
        function handleUserPhotoUpload(event) {
            const file = event.target.files[0];
            if (!file) return;

            if (!activeSlotId) {
                showToast('Selecione uma posição na árvore primeiro!');
                return;
            }

            const reader = new FileReader();
            reader.onload = function(e) {
                const imgDataUrl = e.target.result;
                treeSlotsState[activeSlotId] = {
                    type: 'custom',
                    value: imgDataUrl
                };

                renderSlotContent(activeSlotId);
                document.getElementById('btn-remove-ornament').classList.remove('hidden');
                showToast(`Sua foto foi adicionada no espaço #${activeSlotId}!`);
            };
            reader.readAsDataURL(file);
            // Reseta o valor do input para que o usuário possa reenviar a mesma imagem se necessário
            event.target.value = '';
        }

        // Renderiza o enfeite dentro do círculo do espaço especificado no editor
        function renderSlotContent(slotId) {
            const slotEl = document.querySelector(`[data-slot-id="${slotId}"] .slot-content`);
            const slotCircle = document.querySelector(`[data-slot-id="${slotId}"]`);
            if (!slotEl) return;

            const data = treeSlotsState[slotId];
            if (!data) {
                slotEl.innerHTML = '';
                slotCircle.classList.add('hotspot-pulse');
                slotCircle.style.background = '#ffffff';
                return;
            }

            // Remove a animação de pulsação assim que preenchido
            slotCircle.classList.remove('hotspot-pulse');

            if (data.type === 'preset') {
                slotEl.innerHTML = data.value;
            } else if (data.type === 'custom') {
                slotEl.innerHTML = `<img src="${data.value}" class="w-full h-full object-cover rounded-full shadow-inner" />`;
            }
        }

        // Remove o enfeite do espaço ativo
        function removeCurrentOrnament() {
            if (!activeSlotId || !treeSlotsState[activeSlotId]) return;

            delete treeSlotsState[activeSlotId];
            renderSlotContent(activeSlotId);
            document.getElementById('btn-remove-ornament').classList.add('hidden');
            showToast(`Enfeite removido da posição #${activeSlotId}`);
        }

       

        // Tira uma captura de tela automática da árvore decorada usando html2canvas
        function takeScreenshot() {
            showToast('Tirando foto da árvore...');
            
            const captureArea = document.getElementById('final-tree-capture-area');

            html2canvas(captureArea, {
                backgroundColor: null,
                useCORS: true,
                scale: 2 // Impressão de alta resolução
            }).then(canvas => {
                // Cria link de download para o PNG da captura de tela
                const image = canvas.toDataURL("image/png");
                const link = document.createElement('a');
                link.download = `minha-arvore-de-natal-${Date.now()}.png`;
                link.href = image;
                link.click();

                showToast('Foto salva com sucesso!');
            }).catch(err => {
                console.error(err);
                showToast('Erro ao tirar foto da árvore.');
            });
        }

        // Exibe o Banner de Notificação Toast
        function showToast(text) {
            const toast = document.getElementById('toast-msg');
            const toastText = document.getElementById('toast-text');
            toastText.innerText = text;

            toast.classList.remove('opacity-0', 'pointer-events-none');
            toast.classList.add('opacity-100');

            setTimeout(() => {
                toast.classList.remove('opacity-100');
                toast.classList.add('opacity-0', 'pointer-events-none');
            }, 3000);
        }



















function renderFinalTree() {

    const finalLayer = document.getElementById('final-ornaments-layer');
    const editorWrapper = document.getElementById('editor-tree-wrapper');

    finalLayer.innerHTML = '';

    const editorRect = editorWrapper.getBoundingClientRect();

    if (!editorRect.width || !editorRect.height) {
        console.error('Não foi possível medir a árvore.');
        return;
    }

    const slots = editorWrapper.querySelectorAll('.slot-circle');

    slots.forEach(slot => {

        const slotId = slot.dataset.slotId;
        const ornament = treeSlotsState[slotId];

        if (!ornament) return;

        const rect = slot.getBoundingClientRect();

        // Posição proporcional à árvore
        const left = ((rect.left - editorRect.left) / editorRect.width) * 100;
        const top = ((rect.top - editorRect.top) / editorRect.height) * 100;

        // Tamanho proporcional à árvore
        const width = (rect.width / editorRect.width) * 100;
        const height = (rect.height / editorRect.height) * 100;

        const ornamentElement = document.createElement('div');

        ornamentElement.style.position = 'absolute';
        ornamentElement.style.left = `${left}%`;
        ornamentElement.style.top = `${top}%`;
        ornamentElement.style.width = `${width}%`;
        ornamentElement.style.height = `${height}%`;

        ornamentElement.style.display = 'flex';
        ornamentElement.style.alignItems = 'center';
        ornamentElement.style.justifyContent = 'center';
        ornamentElement.style.boxSizing = 'border-box';

        if (ornament.type === 'preset') {

            ornamentElement.innerHTML = ornament.value;

            const svg = ornamentElement.querySelector('svg');

            if (svg) {
                svg.style.width = '100%';
                svg.style.height = '100%';
                svg.style.display = 'block';
            }

        } else if (ornament.type === 'custom') {

            const img = document.createElement('img');

            img.src = ornament.value;
            img.style.width = '70px';
            img.style.height = '70px';
            img.style.objectFit = 'contain';
            img.style.borderRadius = '40%';

            ornamentElement.appendChild(img);
        }

        finalLayer.appendChild(ornamentElement);
    });
}