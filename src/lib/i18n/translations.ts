export type Language = 'en' | 'fr' | 'it' | 'es' | 'ru';

export type Translations = {
  app: {
    title: string;
    subtitle: string;
    hello: string;
    question: string;
    currentState: string;
    today: string;
    avg: string;
    todayOverview: string;
    dayOverview: string;
    overallAverage: string;
    tip: string;
    tipDetails: string;
  };
  tracks: {
    mood: string;
    sleep: string;
    pressure: string;
    thinking: string;
    reality: string;
    motion: string;
  };
  sources: {
    mood: {
      joy: string;
      excitement: string;
      anxiety: string;
      sadness: string;
      anger: string;
      calm: string;
      frustration: string;
      gratitude: string;
    };
    sleep: {
      insomnia: string;
      nightmares: string;
      restful: string;
      interrupted: string;
      deepSleep: string;
      earlyWake: string;
      drowsy: string;
    };
    pressure: {
      workStress: string;
      deadlines: string;
      relationships: string;
      financial: string;
      healthConcerns: string;
      socialObligations: string;
      selfImposed: string;
    };
    thinking: {
      clear: string;
      foggy: string;
      racingThoughts: string;
      creative: string;
      focused: string;
      distracted: string;
      ruminating: string;
      intrusiveThoughts: string;
    };
    reality: {
      grounded: string;
      detached: string;
      present: string;
      dissociated: string;
      connected: string;
      spacedOut: string;
      aware: string;
    };
    motion: {
      active: string;
      restless: string;
      sluggish: string;
      energetic: string;
      tense: string;
      relaxed: string;
      fidgety: string;
      still: string;
    };
  };
  slider: {
    normal: string;
    critical: string;
    high: string;
    moderate: string;
    low: string;
  };
  sourceSelector: {
    question: string;
    selected: string;
    source: string;
    sources: string;
  };
  stats: {
    comparisonWith: string;
  };
};

export const translations: Record<Language, Translations> = {
  en: {
    app: {
      title: 'Self Observe',
      subtitle: 'Daily reflection',
      hello: 'Hello',
      question: 'How do you feel about your',
      currentState: 'current state',
      today: 'Today',
      avg: 'Avg',
      todayOverview: "Today's Overview",
      dayOverview: "Day's Overview",
      overallAverage: 'Overall average',
      tip: 'Tip:',
      tipDetails: 'Track your mental state daily to identify patterns and triggers. Values above 5 will prompt you to identify specific sources.',
    },
    tracks: {
      mood: 'Mood',
      sleep: 'Sleep',
      pressure: 'Pressure',
      thinking: 'Thinking',
      reality: 'Reality',
      motion: 'Motion',
    },
    sources: {
      mood: {
        joy: 'Joy',
        excitement: 'Excitement',
        anxiety: 'Anxiety',
        sadness: 'Sadness',
        anger: 'Anger',
        calm: 'Calm',
        frustration: 'Frustration',
        gratitude: 'Gratitude',
      },
      sleep: {
        insomnia: 'Insomnia',
        nightmares: 'Nightmares',
        restful: 'Restful',
        interrupted: 'Interrupted',
        deepSleep: 'Deep sleep',
        earlyWake: 'Early wake',
        drowsy: 'Drowsy',
      },
      pressure: {
        workStress: 'Work stress',
        deadlines: 'Deadlines',
        relationships: 'Relationships',
        financial: 'Financial',
        healthConcerns: 'Health concerns',
        socialObligations: 'Social obligations',
        selfImposed: 'Self-imposed',
      },
      thinking: {
        clear: 'Clear',
        foggy: 'Foggy',
        racingThoughts: 'Racing thoughts',
        creative: 'Creative',
        focused: 'Focused',
        distracted: 'Distracted',
        ruminating: 'Ruminating',
        intrusiveThoughts: 'Intrusive thoughts',
      },
      reality: {
        grounded: 'Grounded',
        detached: 'Detached',
        present: 'Present',
        dissociated: 'Dissociated',
        connected: 'Connected',
        spacedOut: 'Spaced out',
        aware: 'Aware',
      },
      motion: {
        active: 'Active',
        restless: 'Restless',
        sluggish: 'Sluggish',
        energetic: 'Energetic',
        tense: 'Tense',
        relaxed: 'Relaxed',
        fidgety: 'Fidgety',
        still: 'Still',
      },
    },
    slider: {
      normal: 'Normal',
      critical: 'Critical',
      high: 'High temperature',
      moderate: 'Moderate',
      low: 'Low',
    },
    sourceSelector: {
      question: "What's causing the high temperature?",
      selected: 'Selected:',
      source: 'source',
      sources: 'sources',
    },
    stats: {
      comparisonWith: 'Comparison with',
    },
  },
  fr: {
    app: {
      title: 'Self Observe',
      subtitle: 'Réflexion quotidienne',
      hello: 'Bonjour',
      question: 'Comment vous sentez-vous par rapport à votre',
      currentState: 'état actuel',
      today: "Aujourd'hui",
      avg: 'Moy',
      todayOverview: "Vue d'ensemble d'aujourd'hui",
      dayOverview: 'Vue d\'ensemble du jour',
      overallAverage: 'Moyenne générale',
      tip: 'Conseil :',
      tipDetails: 'Suivez votre état mental quotidiennement pour identifier les schémas et les déclencheurs. Les valeurs supérieures à 5 vous inviteront à identifier des sources spécifiques.',
    },
    tracks: {
      mood: 'Humeur',
      sleep: 'Sommeil',
      pressure: 'Pression',
      thinking: 'Pensée',
      reality: 'Réalité',
      motion: 'Mouvement',
    },
    sources: {
      mood: {
        joy: 'Joie',
        excitement: 'Excitation',
        anxiety: 'Anxiété',
        sadness: 'Tristesse',
        anger: 'Colère',
        calm: 'Calme',
        frustration: 'Frustration',
        gratitude: 'Gratitude',
      },
      sleep: {
        insomnia: 'Insomnie',
        nightmares: 'Cauchemars',
        restful: 'Réparateur',
        interrupted: 'Interrompu',
        deepSleep: 'Sommeil profond',
        earlyWake: 'Réveil précoce',
        drowsy: 'Somnolent',
      },
      pressure: {
        workStress: 'Stress au travail',
        deadlines: 'Délais',
        relationships: 'Relations',
        financial: 'Financier',
        healthConcerns: 'Préoccupations de santé',
        socialObligations: 'Obligations sociales',
        selfImposed: 'Auto-imposé',
      },
      thinking: {
        clear: 'Clair',
        foggy: 'Brumeux',
        racingThoughts: 'Pensées accélérées',
        creative: 'Créatif',
        focused: 'Concentré',
        distracted: 'Distrait',
        ruminating: 'Rumination',
        intrusiveThoughts: 'Pensées intrusives',
      },
      reality: {
        grounded: 'Ancré',
        detached: 'Détaché',
        present: 'Présent',
        dissociated: 'Dissocié',
        connected: 'Connecté',
        spacedOut: 'Dans la lune',
        aware: 'Conscient',
      },
      motion: {
        active: 'Actif',
        restless: 'Agité',
        sluggish: 'Lent',
        energetic: 'Énergique',
        tense: 'Tendu',
        relaxed: 'Détendu',
        fidgety: 'Nerveux',
        still: 'Immobile',
      },
    },
    slider: {
      normal: 'Normal',
      critical: 'Critique',
      high: 'Température élevée',
      moderate: 'Modéré',
      low: 'Faible',
    },
    sourceSelector: {
      question: "Qu'est-ce qui cause la température élevée ?",
      selected: 'Sélectionné :',
      source: 'source',
      sources: 'sources',
    },
    stats: {
      comparisonWith: 'Comparaison avec',
    },
  },
  it: {
    app: {
      title: 'Self Observe',
      subtitle: 'Riflessione quotidiana',
      hello: 'Ciao',
      question: 'Come ti senti riguardo al tuo',
      currentState: 'stato attuale',
      today: 'Oggi',
      avg: 'Media',
      todayOverview: 'Panoramica di oggi',
      dayOverview: 'Panoramica del giorno',
      overallAverage: 'Media generale',
      tip: 'Suggerimento:',
      tipDetails: 'Traccia il tuo stato mentale quotidianamente per identificare schemi e fattori scatenanti. I valori superiori a 5 ti inviteranno a identificare fonti specifiche.',
    },
    tracks: {
      mood: 'Umore',
      sleep: 'Sonno',
      pressure: 'Pressione',
      thinking: 'Pensiero',
      reality: 'Realtà',
      motion: 'Movimento',
    },
    sources: {
      mood: {
        joy: 'Gioia',
        excitement: 'Eccitazione',
        anxiety: 'Ansia',
        sadness: 'Tristezza',
        anger: 'Rabbia',
        calm: 'Calma',
        frustration: 'Frustrazione',
        gratitude: 'Gratitudine',
      },
      sleep: {
        insomnia: 'Insonnia',
        nightmares: 'Incubi',
        restful: 'Riposante',
        interrupted: 'Interrotto',
        deepSleep: 'Sonno profondo',
        earlyWake: 'Risveglio precoce',
        drowsy: 'Sonnolento',
      },
      pressure: {
        workStress: 'Stress lavorativo',
        deadlines: 'Scadenze',
        relationships: 'Relazioni',
        financial: 'Finanziario',
        healthConcerns: 'Preoccupazioni per la salute',
        socialObligations: 'Obblighi sociali',
        selfImposed: 'Auto-imposto',
      },
      thinking: {
        clear: 'Chiaro',
        foggy: 'Confuso',
        racingThoughts: 'Pensieri accelerati',
        creative: 'Creativo',
        focused: 'Concentrato',
        distracted: 'Distratto',
        ruminating: 'Ruminazione',
        intrusiveThoughts: 'Pensieri intrusivi',
      },
      reality: {
        grounded: 'Radicato',
        detached: 'Distaccato',
        present: 'Presente',
        dissociated: 'Dissociato',
        connected: 'Connesso',
        spacedOut: 'Distratto',
        aware: 'Consapevole',
      },
      motion: {
        active: 'Attivo',
        restless: 'Inquieto',
        sluggish: 'Lento',
        energetic: 'Energico',
        tense: 'Teso',
        relaxed: 'Rilassato',
        fidgety: 'Nervoso',
        still: 'Immobile',
      },
    },
    slider: {
      normal: 'Normale',
      critical: 'Critico',
      high: 'Temperatura alta',
      moderate: 'Moderato',
      low: 'Basso',
    },
    sourceSelector: {
      question: 'Cosa causa la temperatura elevata?',
      selected: 'Selezionato:',
      source: 'fonte',
      sources: 'fonti',
    },
    stats: {
      comparisonWith: 'Confronto con',
    },
  },
  es: {
    app: {
      title: 'Self Observe',
      subtitle: 'Reflexión diaria',
      hello: 'Hola',
      question: 'Cómo te sientes acerca de tu',
      currentState: 'estado actual',
      today: 'Hoy',
      avg: 'Prom',
      todayOverview: 'Resumen de hoy',
      dayOverview: 'Resumen del día',
      overallAverage: 'Promedio general',
      tip: 'Consejo:',
      tipDetails: 'Rastrea tu estado mental diariamente para identificar patrones y desencadenantes. Los valores superiores a 5 te pedirán que identifiques fuentes específicas.',
    },
    tracks: {
      mood: 'Estado de ánimo',
      sleep: 'Sueño',
      pressure: 'Presión',
      thinking: 'Pensamiento',
      reality: 'Realidad',
      motion: 'Movimiento',
    },
    sources: {
      mood: {
        joy: 'Alegría',
        excitement: 'Emoción',
        anxiety: 'Ansiedad',
        sadness: 'Tristeza',
        anger: 'Enojo',
        calm: 'Calma',
        frustration: 'Frustración',
        gratitude: 'Gratitud',
      },
      sleep: {
        insomnia: 'Insomnio',
        nightmares: 'Pesadillas',
        restful: 'Reparador',
        interrupted: 'Interrumpido',
        deepSleep: 'Sueño profundo',
        earlyWake: 'Despertar temprano',
        drowsy: 'Somnoliento',
      },
      pressure: {
        workStress: 'Estrés laboral',
        deadlines: 'Plazos',
        relationships: 'Relaciones',
        financial: 'Financiero',
        healthConcerns: 'Preocupaciones de salud',
        socialObligations: 'Obligaciones sociales',
        selfImposed: 'Autoimpuesto',
      },
      thinking: {
        clear: 'Claro',
        foggy: 'Confuso',
        racingThoughts: 'Pensamientos acelerados',
        creative: 'Creativo',
        focused: 'Concentrado',
        distracted: 'Distraído',
        ruminating: 'Rumiación',
        intrusiveThoughts: 'Pensamientos intrusivos',
      },
      reality: {
        grounded: 'Enraizado',
        detached: 'Desapegado',
        present: 'Presente',
        dissociated: 'Disociado',
        connected: 'Conectado',
        spacedOut: 'Distraído',
        aware: 'Consciente',
      },
      motion: {
        active: 'Activo',
        restless: 'Inquieto',
        sluggish: 'Lento',
        energetic: 'Enérgico',
        tense: 'Tenso',
        relaxed: 'Relajado',
        fidgety: 'Nervioso',
        still: 'Quieto',
      },
    },
    slider: {
      normal: 'Normal',
      critical: 'Crítico',
      high: 'Temperatura alta',
      moderate: 'Moderado',
      low: 'Bajo',
    },
    sourceSelector: {
      question: '¿Qué está causando la temperatura alta?',
      selected: 'Seleccionado:',
      source: 'fuente',
      sources: 'fuentes',
    },
    stats: {
      comparisonWith: 'Comparación con',
    },
  },
  ru: {
    app: {
      title: 'Self Observe',
      subtitle: 'Ежедневная рефлексия',
      hello: 'Привет',
      question: 'Как вы себя чувствуете относительно вашего',
      currentState: 'текущего состояния',
      today: 'Сегодня',
      avg: 'Сред',
      todayOverview: 'Обзор сегодня',
      dayOverview: 'Обзор дня',
      overallAverage: 'Общая средняя',
      tip: 'Совет:',
      tipDetails: 'Отслеживайте свое ментальное состояние ежедневно, чтобы выявить паттерны и триггеры. Значения выше 5 попросят вас определить конкретные источники.',
    },
    tracks: {
      mood: 'Настроение',
      sleep: 'Сон',
      pressure: 'Давление',
      thinking: 'Мышление',
      reality: 'Реальность',
      motion: 'Движение',
    },
    sources: {
      mood: {
        joy: 'Радость',
        excitement: 'Волнение',
        anxiety: 'Тревога',
        sadness: 'Грусть',
        anger: 'Гнев',
        calm: 'Спокойствие',
        frustration: 'Фрустрация',
        gratitude: 'Благодарность',
      },
      sleep: {
        insomnia: 'Бессонница',
        nightmares: 'Кошмары',
        restful: 'Отдохнувший',
        interrupted: 'Прерванный',
        deepSleep: 'Глубокий сон',
        earlyWake: 'Раннее пробуждение',
        drowsy: 'Сонный',
      },
      pressure: {
        workStress: 'Рабочий стресс',
        deadlines: 'Сроки',
        relationships: 'Отношения',
        financial: 'Финансы',
        healthConcerns: 'Проблемы со здоровьем',
        socialObligations: 'Социальные обязательства',
        selfImposed: 'Самоналоженные',
      },
      thinking: {
        clear: 'Ясное',
        foggy: 'Туманное',
        racingThoughts: 'Скачущие мысли',
        creative: 'Творческое',
        focused: 'Сосредоточенное',
        distracted: 'Рассеянное',
        ruminating: 'Размышление',
        intrusiveThoughts: 'Навязчивые мысли',
      },
      reality: {
        grounded: 'Заземленный',
        detached: 'Отстраненный',
        present: 'Присутствующий',
        dissociated: 'Диссоциированный',
        connected: 'Связанный',
        spacedOut: 'Рассеянный',
        aware: 'Осознанный',
      },
      motion: {
        active: 'Активный',
        restless: 'Беспокойный',
        sluggish: 'Вялый',
        energetic: 'Энергичный',
        tense: 'Напряженный',
        relaxed: 'Расслабленный',
        fidgety: 'Нервный',
        still: 'Неподвижный',
      },
    },
    slider: {
      normal: 'Нормально',
      critical: 'Критично',
      high: 'Высокая температура',
      moderate: 'Умеренно',
      low: 'Низко',
    },
    sourceSelector: {
      question: 'Что вызывает высокую температуру?',
      selected: 'Выбрано:',
      source: 'источник',
      sources: 'источников',
    },
    stats: {
      comparisonWith: 'Сравнение с',
    },
  },
};
