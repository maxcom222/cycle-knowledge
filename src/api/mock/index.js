import { Server } from "miragejs";

export default function ({ environment = "development" } = {}) {
  return new Server({
    environment,

    routes() {
      this.get("/api/categories", (schema) => {
        return schema.db.categories;
      });
      this.get("/api/category/:id", (schema, request) => {
        return schema.db.categories.find(request.params.id);
      });
      this.get("/api/:category_id/articles", (schema, request) => {
        return schema.db.articles.where({
          category_id: request.params.category_id,
        });
      });
      this.get("/api/articles/:article_id", (schema, request) => {
        return schema.db.articles.find(request.params.article_id);
      });
      this.get("/api/bookmarks", (schema) => {
        return schema.db.articles.where({ is_bookmark: true });
      });
      this.post("/api/bookmarks/:article_id", (schema, request) => {
        schema.db.articles.update(request.params.article_id, {
          is_bookmark: true,
        });
        return schema.db.articles.where({ is_bookmark: true });
      });
      this.delete("/api/bookmarks/:article_id", (schema, request) => {
        schema.db.articles.update(request.params.article_id, {
          is_bookmark: false,
        });
        return request.params.article_id;
      });
      this.passthrough();
    },
    seeds(server) {
      server.db.loadData({
        categories: [
          {
            id: 1,
            name: "NFP Regeln",
            img: "../categories/category1.png",
            description: `Die Regeln von NFP nach Sensiplan helfen dir, sicher zu bestimmen, wann deine fruchtbare Zeit beginnt und wann sie endet. Insbesondere die Regeln für den Beginn der fruchtbaren Zeit musst du regelmäßig prüfen, ob sie noch auf dich zutreffen.
            
            Es gibt verschiedene Regeln, um den <b>Beginn der fruchtbaren Zeit</b> zu bestimmen.
            <b>5-Tage-Regel
            Minus-8-Tage-Regel
            Minus-20-Rege
            Doppelte Kontrolle am Zyklusanfang</b>

            Das <b>Ende der fruchtbaren Zeit</b> bestimmst du, indem du die Temperatur und ein zweites Körperzeichen (Zervixschleim oder Gebärmutterhals) auswertest. 
            <b>Temperatur
            Zervixschleim 
            Gebärmutterhals
            Doppelte Kontrolle am Zyklusende</b>
            `,
          },
          {
            id: 2,
            name: "Temperatur",
            img: "../categories/category2.png",
            description: `Hier steht ein Einleitungstext zum Thema Temperatur. Dieser Text hat in etwa 5 Zeilen und enthält kurze Informationen, die die Anwender:innen gerne lesen.
            <b>Messen
            Störungen</b>
            `,
          },
          {
            id: 3,
            name: "Zervixschleim",
            img: "../categories/category3.png",
            description: `
            Hier steht ein Einleitungstext zum Thema Gebärmutterhals. 
            
            Dieser Text hat in etwa 5 Zeilen und enthält kurze Informationen, die die Anwender:innen gerne lesen.
            `,
          },
          {
            id: 4,
            name: "Gebärmutterhals",
            img: "../categories/category4.png",
            description: `
            Hier steht ein Einleitungstext zum Thema Zervixschleim. 

            Dieser Text hat in etwa 5 Zeilen und enthält kurze Informationen, die die Anwender:innen gerne lesen.
            `,
          },
          {
            id: 5,
            name: "Weitere Körperzeichen im Zyklus",
            img: "../categories/category5.png",
            description: `
            
            Hier steht ein Einleitungstext zum Thema Temperatur. 
            
            Dieser Text hat in etwa 5 Zeilen und enthält kurze Informationen, die die Anwender:innen gerne lesen.
            `,
          },
          {
            id: 6,
            name: "Kinderwunsch",
            img: "../categories/category6.png",
            description: `
            
            Hier steht ein Einleitungstext zum Thema Kinderwunsch. 
            
            Dieser Text hat in etwa 5 Zeilen und enthält kurze Informationen, die die Anwender:innen gerne lesen
            `,
          },
          {
            id: 7,
            name: "Zyklusstörungen",
            img: "../categories/category7.png",
            description: `
            
            Hier steht ein Einleitungstext zum Thema Zyklusstörungen. 
            
            Dieser Text hat in etwa 5 Zeilen und enthält kurze Informationen, die die Anwender:innen gerne lesen.
            `,
          },
        ],
        articles: [
          {
            category_id: 1,
            id: 1,
            is_bookmark: false,
            title: "5-Tage-Regel",
            description:
              `Diese Regel gilt während der ersten 12 Zyklen, die du nach den NFP-Regeln nach sensiplan® auswertest.
              Wenn du im letzten Zyklus eine Temperaturhochlage ausgewertet hast, beginnt deine fruchtbare Zeit an Zyklustag 6. D. h. dass du in den ersten 12 Zyklen am Zyklusanfang die ersten 5 Tage als unfruchtbar annehmen kannst.
              Achtung: Wenn du vorher Zervixschleim siehst oder fühlst, beginnt sofort deine fruchtbare Zeit.
              Wenn du schon mal eine 1. höhere Messung vor Zyklustag 12 beobachtet hast, gilt für dich die Minus-8-Regel und die fruchtbare Zeit am Zyklusanfang endet bereits am Abend des 4. Zyklustags oder früher.
              Wenn du schon mal eine 1. höhere Messung vor Zyklustag 12 beobachtet hast, gilt für dich die Minus-8-Regel und die fruchtbare Zeit am Zyklusanfang endet bereits am Abend des 4. Zyklustags oder früher.
              `,
            link_to: []
          },
          {
            category_id: 1,
            id: 2,
            is_bookmark: false,
            title: "Minus-8-Tage-Regel",
            description:
              `Die Minus-8-Regel basiert auf dem Wissen über die gemeinsame Fruchtbarkeit von Eizelle und Spermium. Der Eisprung kann bis zu 2 Tagen vor der 1. höheren Messung stattfinden. Spermien können unter guten Bedingungen bis zu 5 Tagen in unserem Körper überleben und die Eizelle befruchten. Daraus ergibt sich eine gemeinsame Fruchtbarkeit von 7 Tagen. 
              <b>Regel</b>
              Wenn wir 12 Zyklen beobachtet und nach NFP-Regeln ausgewertet haben, wissen wir, wann unsere bisher früheste 1. höhere Messung stattgefunden hat, können davon 8 Tage abziehen und erhalten die unfruchtbare Zeit am Zyklusanfang.
              
              <b>Wichtig:</b> Tendenziell kommt unser Eisprung im Laufe unseres Lebens immer früher. Auch wenn wir besonders entspannt sind und die erste Zyklusphase nicht gestört ist, kann es passieren, dass wir die 1. höhere Messung früher beobachten. Daher ist es wichtig, immer zu prüfen, ob eine Vorverlagerung stattgefunden hat und die Minus-8-Regel anzupassen. Außerdem zeigt dir der Zervixschleim in solchen Fällen an, dass dein Eisprung wahrscheinlich früher kommt. Deswegen ist die doppelte Kontrolle am Zyklusanfang so wichtig.
              `,
            link_to: [4]
          },
          {
            category_id: 1,
            id: 3,
            is_bookmark: false,
            title: "Minus-20-Regel",
            description:
              `Diese Regel gilt für dich, wenn du einen Menstruationskalender geführt hast und jetzt mit NFP nach sensiplan® anfangen möchtest.
              
              Nimm deinen kürzesten Zyklus aus mindestens 12 früheren Zyklen. Ziehe 20 Tage ab. Das Ergebnis gibt den letzten unfruchtbaren Tag am Zyklusanfang für dich an.
              
              <b>Beispiel:</b> Wenn dein kürzester Zyklus bisher 27 Tage lang war, ziehst du davon 20 Tage ab. Das ergibt 7 Tage, die du am Zyklusanfang als unfruchtbar annehmen darfst – natürlich nur, solange du keinen Zervixschleim beobachtest. Ab dem Moment beginnt sofort deine fruchtbare Zeit.              
              `,
            link_to: []
          },
          {
            category_id: 1,
            id: 4,
            is_bookmark: false,
            title: "Doppelte Kontrolle am Zyklusanfang",
            description:
              `Wenn du keinen Kinderwunsch hast, ist diese Regel besonders wichtig für dich.
              Nachdem du die 5-Tage-Regel oder die Minus-8-Regel für dich in dem aktuellen Zyklus angewendet hast, gilt das Prinzip der doppelten Kontrolle. Das heißt, dass deine fruchtbare Zeit auch schon früher beginnen kann, nämlich:
              
              Wenn du den <b>Zervixschleim</b> beobachtest: Sobald du Zervixschleim siehst oder fühlst (feucht oder bessere Qualität).
              
              Wenn du den <b>Gebärmutterhals</b> beobachtest: Sobald du am Zyklusanfang eine Veränderung am Gebärmutterhals wahrnimmst.
              `,
            link_to: []
          },
          {
            category_id: 1,
            id: 5,
            is_bookmark: false,
            title: "Temperatur",
            description:
              `Wenn du einen Temperaturwert hast, der höher ist als die sechs Werte davor, ist das deine erste höhere Temperatur und dein Temperaturanstieg hat damit begonnen. Diesen höheren Wert markieren wir mit einem umgekehrten Dreieck. Die sechs niedrigen Werte davor zählen wir zurück. Auf dem höchsten davon zeichnen wir eine Hilfslinie, die uns zeigt, welcher der höchste Wert von den niedrigen ist.
              <img src="../articles/Temperatur_1. höhere Messung.svg" />
              
              Regel:
              Wir warten zwei weitere Werte ab. Beide müssen über der Hilfslinie liegen, der dritte sogar mindestens 2 Zehntel, also 2 Kästchen über der Hilfslinie.
              <img src="../articles/Temperatur_3. höhere Messung.svg" />
              Wenn du nach dieser Regel nicht auswerten kannst, gibt es zwei Ausnahmeregeln. Achtung: Du darfst die Regeln NICHT miteinander kombinieren!
              
              Ausnahmeregel 1
              Wenn der dritte Temperaturwert nicht 2 Zehntel höher ist, müssen wir einen weiteren Temperaturwert abwarten. Dieser muss auch über der Hilfslinie liegen, aber nicht unbedingt 2 Zehntel.
              <img src="../articles/Temperatur_Ausnahmeregel 1.svg" />

              Ausnahmeregel 2
              Wenn einer von den drei höheren Temperaturwerten auf oder unter die Hilfslinie fällt, berücksichtigen wir diesen Wert nicht. Deswegen markieren wir ihn auch nicht und warten einen weiteren Wert ab. Dieser muss 2 Zehntel über der Hilfslinie liegen.
              <img src="../articles/Temperatur_Ausnahmeregel 2.svg" />
              `,
              link_to: []
          },
          {
            category_id: 1,
            id: 6,
            is_bookmark: false,
            title: "Zervixschleim",
            description:
              `Wenn du den Zervixschleim auswerten möchtest, musst du die beste Qualität in dem jeweiligen Zyklus bestimmen. 
              <b>Regel</b>
              Der Höhepunkt des Zervixschleim-Symptoms ist der letzte Tag mit der individuell besten Zervixschleim-Qualität.
              Diesen Höhepunkt kannst du immer erst im Nachhinein bestimmen, also erst am Abend des nächsten Tages, wenn der Umschwung zu einer schlechteren Qualität stattgefunden hat. Wir kennzeichnen den Höhepunkt mit einem H über der Zervixschleim-Abkürzung im Zyklusblatt.
              <img src="../articles/Zervixschleim_Auswertung.svg" />
              Der Eisprung liegt normalerweise in einem Zeitraum von 2 Tagen vor bis 2 Tage nach dem Höhepunkt des Zervixschleim-Symptoms.
              
              <b>Sonderfall</b>
              Es gibt selten den Fall, dass die Einteilung in S und S+ zu grob ist. Für diesen Fall gibt es eine Sonderregel. Diese darf nur angewendet werden, wenn du über mehrere Zyklen beobachtet hast, dass du den Höhepunkt deines Zervixschleim-Symptoms immer erst viel später als die Temperaturauswertung bestimmen kannst. In dem Fall darfst du ausnahmsweise die Tage klammern, an denen du innerhalb der gleichen Kategorie einen Umschwung zu einer schlechteren Qualität beobachtest.
              <img src="../articles/Zervixschleim_Sonderregel1.svg" />
              `,
              link_to: []
          },
          {
            category_id: 1,
            id: 7,
            is_bookmark: false,
            title: "Gebärmutterhals",
            description:
              `Um die unfruchtbare Zeit nach dem Eisprung zu bestimmen, musst du drei Tage abwarten, an denen sich dein Muttermund geschlossen und hart angefühlt hat. Am Abend des dritten Tages beginnt in doppelter Kontrolle mit der Temperatur deine unfruchtbare Zeit.
              
              <img src="../articles/Muttermund_Auswertung.svg" />
              `,
              link_to: []
          },
          {
            category_id: 1,
            id: 8,
            is_bookmark: false,
            title: "Doppelte Kontrolle am Zyklusende",
            description:
              `Wenn du das Ende deiner fruchtbaren Zeit bestimmen möchtest, musst du auch hier die doppelte Kontrolle anwenden. D. h. dass du abwarten musst, bis beide Körperzeichen ausgewertet ist, bevor du das Ende bestimmen kannst. 
              Beispiel: Wenn deine Temperaturauswertung bereits abgeschlossen ist, musst du noch warten, bis auch der Zervixschleim oder der Gebärmutterhals ausgewertet sind. 
              Wenn der Zervixschleim oder der Gebärmutterhals zuerst ausgewertet sind, musst du natürlich andersherum auch abwarten, bis die Temperaturauswertung abgeschlossen ist.
              Erst dann beginnt deine unfruchtbare Zeit am Zyklusende.
              `,
              link_to: []
          },
          {
            category_id: 2,
            id: 9,
            is_bookmark: false,
            title: "Messen",
            description:
              `Deine Basaltemperatur gibt dir Auskunft darüber, ob ein Eisprung stattgefunden hat. Zu Beginn des Zyklus haben wir eine niedrige Körpertemperatur. Nach dem Eisprung steigt unsere Körpertemperatur an. Wir sprechen von zwei Temperaturniveaus: dem Tieflagen- und dem Hochlagenniveau. Wie hoch genau die sind, ist ganz individuell.
              Da diese beiden Niveaus manchmal nur wenige Zehntel auseinanderliegen, brauchst du ein Thermometer, dass 2 Stellen nach dem Komma anzeigt. Dabei ist egal, ob du ein digitales oder ein analoges Thermometer nimmst.
              Du kannst im Po, in der Vagina oder im Mund messen – alle drei Messort sind okay. Allerdings sind die Messungen im Mund oft störungsanfällig und können schwanken.
              Wichtig ist nur, dass du immer für einen gesamten Zyklus beim gleichen Messort bleibst und dasselbe Thermometer verwendest!
              Miss morgens als erstes – während du noch im Bett liegst – für 3 Minuten deine Temperatur und notiere den Temperaturwert und wann du gemessen hast in der App. Nach ein paar Monaten wirst du schon wissen, ob deine Temperaturwerte gestört sind, wenn du zu stark abweichenden Uhrzeiten misst.
              Die Temperatur wird dann auf 0,5 auf- oder abgerundet. Wenn du die Temperatur in die App einträgst, rundet sie automatisch für dich.
              <img src="../articles/Temperatur_Runden.svg" />
              Temperaturwerte die gestört sind, musst du ausklammern.
              `,
              link_to: [10]
          },
          {
            category_id: 2,
            id: 10,
            is_bookmark: false,
            title: "Störungen",
            description:
              `Ob eine Störung vorliegt, kannst du wie folgt entscheiden:
              Eine Störung ist ein erhöhter Temperaturwert, der aus dem Tieflagenniveau herausragt und durch ein besonderes Ereignis erklärt werden kann.
              Deine Temperatur kann durch unterschiedliche Faktoren gestört sein, wie zum Beispiel: 
              ●	Krankheit 
              ●	Alkohl- oder Drogenkonsum 
              ●	Stress
              ●	Kopfschmerzen/Migräne
              ●	Späte Messzeit
              ●	Schlechter Schlaf
              ●	Zu spätes Essen
              ●	usw.
              Achte in den ersten Monaten deiner Zyklusbeobachtung darauf, welche Faktoren bei dir stören. Denn diese Faktoren können sehr individuell sein.
              Wenn du unsicher bist, dann kannst du dich an uns Beraterinnen wenden. Wir werfen dann gemeinsam einen Blick auf deine Aufzeichnungen.              
              `,
              link_to: []
          },
          {
            category_id: 3,
            id: 11,
            is_bookmark: false,
            title: "beobachten",
            description:
              `Den Zervixschleim können wir auf verschiedene Weisen beobachten: empfinden, fühlen und sehen.
              
              <b>Empfinden:</b> Fühle tagsüber in dich hinein. Wie fühlst du dich am Vulvaeingang? Fühlt es sich trocken, feucht oder nass an? Oder spürst du gar nichts? Auch wenn du nichts spürst, ist es wichtig, dass du diese Beobachtung einträgst! 
              Am Anfang kann es sein, dass es dir schwerfällt, das Empfinden zu beschreiben. Bleib dran! Du wirst mit jedem Tag besser verstehen, wie sich dein Zervixschleim im Laufe des Zyklus verändert und die Beobachtung fällt dir nach ein paar Zyklen bestimmt schon viel leichter.
              
              <b>Fühlen:</b> Den Zervixschleim kannst du aber nicht nur empfinden, sondern auch er-„fühlen“. Wenn du mit dem Finger oder mit dem Toilettenpapier über den Vulvaeingang wischst, merkst du vielleicht, dass Finger oder Papier an einigen Tagen besser darüber gleiten als an anderen Tagen. Der Vulvaeingang fühlt sich dann schlüpfrig, rutschig oder glitschig an, ähnlich wie Öl auf der Haut oder Seife zwischen den Fingern.
              
              <b>Sehen:</b> An manchen Tagen ist der Zervixschleim sichtbar. Diese Beobachtung kannst du am besten machen, wenn du sowieso zur Toilette musst. Wische vorm Pipi machen mit dem Finger oder mit dem Toilettenpapier über den Vulvaeingang und gucke, ob Zervixschleim daran kleben bleibt und wie er aussieht.
              Es kann auch sein, dass du Zervixschleim siehst, wenn du auf Toilette bist. Vielleicht siehst du, wie er als Faden heruntertropft, er sichtbar herumliegt oder im Wasser schwimmt. Guck doch mal nach!
              `,
              link_to: []
          },
          {
            category_id: 3,
            id: 12,
            is_bookmark: false,
            title: "Störungen",
            description:
              `Auch die Zervixschleim-Beobachtung kann gestört sein. Wenn du ungeschützten Sex hattest, kann zum Beispiel das Ejakulat deine Beobachtung behindern. Andere Störfaktoren können ein Vaginalinfekt (und die jeweilige Creme dagegen), Schleimlöser oder Badeurlaub sein.
              
              Trage in dem Fall trotzdem deine Beobachtung ein, gib die Störung an und klammer den Zervixschleim dann aus. 
              `,
              link_to: []
          },
          {
            category_id: 3,
            id: 13,
            is_bookmark: false,
            title: "Kategorien",
            description:
              `Bei der Zervixschleim-Beobachtung handelt es sich um eine sehr individuelle Feststellung. Damit wir sie vereinheitlichen und bewerten können, gibt es bestimmte Kategorien. Auf der einen Seite steht unser Empfinden bzw. das Er-„Fühlen“. Auf der anderen Seite das Aussehen. Die verschiedenen Begriffe geben dir eine Auswahl und ermutigen, deine Beobachtungen in Worte zu fassen. Eine Kategorie umfasst eine ganze Breite an Begriffen. Nicht alle müssen auf deinen Zervixschleim zutreffen.
              
              Wenn du die passenden Worte zu deiner Beobachtung gefunden hast, kannst du aus der Kombination eine Abkürzung ableiten, die dann im Zyklusblatt über der 37,0 ° Grad-Linie eingetragen werden. So siehst du auf einen Blick, wie sich dein Zervixschleim im Laufe des Zyklus entwickelt, kannst den Schleimhöhepunkt markieren und nach den NFP-Regeln auswerten.
              
              <img src="../articles/Zervixschleim_EintragungUndAbkürzungen.svg" />
              
              `,
              link_to: []
          },
          {
            category_id: 4,
            id: 14,
            is_bookmark: false,
            title: "Beobachten",
            description:
              `Zervixschleim und Muttermund stehen in einem engen Zusammenhang miteinander. Der Zervixschleim wird im Gebärmutterhals gebildet. Wenn du ihn siehst, ist er also bereits durch den Muttermund ausgetreten. Das heißt, dass dieser geöffnet sein muss.
              
              Wenn du dich mit der Beobachtung deines Zervixschleims unsicher oder unwohl fühlst oder wenn du nur wenig Zervixschleim hast, kannst du stattdessen auch die Veränderungen des Muttermundes beobachten. Am Anfang kannst du auch beides parallel machen. Wichtig ist nur, dass du dich am Zyklusanfang festlegst, welches der beiden Körperzeichen du für die Auswertung nimmst. Das andere wird dann nicht dabei berücksichtigt, auch wenn es erst später abgeschlossen wäre!
              
              Um den Muttermund zu ertasten, nimmst du am besten eine leicht gebeugte Haltung ein und winkelst ein Bein an, zum Beispiel indem du es auf den Badewannen- oder Bettrand stellst. Die Bewegung ist in etwa so, als würdest du dir einen Tampon einführen. Dort kannst du mit einem oder mit zwei Fingern hinten oben den Muttermund fühlen. Er ist glatt und wölbt sich hervor. 
              
              Bei der Beobachtung des Muttermunds unterscheiden wir drei Kriterien:

              <b>Lage</b>
              Wenn du mit dem Finger kreist, kannst du spüren, ob er hoch oder tief steht. Hoch heißt in diesem Fall, dass du ihn nicht so gut mit dem Finger umkreisen kannst. Wenn er niedrig steht, kommst du vielleicht ganz drum herum.
              
              <b>Öffnung</b>
              Versuche auch, die Öffnung zu finden und herauszufinden, ob der Muttermund geöffnet oder geschlossen ist. Die Öffnung hat die Form eines Grübchens.
              Wenn du schon mal ein Kind vaginal geboren hast, kann es sein, dass dein Muttermund eher die Form eines Schlitzes hat und er nie ganz geschlossen ist. 
              
              <b>Beschaffenheit</b>
              Bei der Beschaffenheit des Muttermundes unterscheiden wir zwischen weich und hart. Ein weicher Muttermund fühlt sich wie Lippen an. Ein geschlossener wie der Nasenknorpel oder wie Ohrläppchen.
              
              <b>Unser Tipp:</b> Fang am besten direkt am Zyklusanfang mit der Beobachtung deines Muttermundes an. So kannst du die Veränderung besser einordnen. Ertaste dafür 1 x täglich den Muttermund, am besten immer in der gleichen Position und mit dem gleichen Finger.

              `,
              link_to: []
          },
          {
            category_id: 4,
            id: 15,
            is_bookmark: false,
            title: "Veränderung im Zyklus",
            description:
              `Am Zyklusanfang – nach deiner Periode – ist der Gebärmutterhals geschlossen, hart und ragt tief in deine Vagina hinein. 
              Zu diesem Zeitpunkt kannst du mit deinem Finger um den Muttermund herumfahren. 
              Je mehr Östrogene auf deinen Körper wirken und je näher der Eisprung rückt, desto weicher wird der Muttermund. 
              Er öffnet sich leicht und zieht sich nach oben, sodass du ihn manchmal auch gar nicht mehr erreichen kannst. 
              Dieser Zustand (hochstehend, weich, weit geöffnet) ist ein Zeichen für deine hochfruchtbare Zeit.
              `,
              link_to: []
          },
          {
            category_id: 5,
            id: 16,
            is_bookmark: false,
            title: "Brustsymptom",
            description:
              `Unsere Brust verändert sich im Laufe des Zyklus. Manche von uns können das spüren, andere nicht. Sie wird voller, schwerer, größer oder auch empfindlicher. Es kann auch sein, dass sie zieht, spannt und/oder richtig doll schmerzt. 
              
              Viele nehmen das Brustsymptom in der zweiten Zyklushälfte, also nach dem Eisprung wahr. Kurz vor dem Einsetzen der nächsten Periode kann es stärker werden und verschwindet dann meistens mit Beginn der Blutung. 
              
              Manche spüren das Brustsymptom auch rund um den Eisprung.
              
              Dieses Körperzeichen ist nicht besonders verlässlich. Sieh es einfach als einen weiteren Hinweis darauf, wo du dich gerade in deinem Zyklus befindest. Und sei nicht irritiert, wenn du es sonst immer spürst und dann mal in einem Zyklus gar nicht. Das kann passieren und ist auch normal.              
              `,
              link_to: []
          },
          {
            category_id: 5,
            id: 17,
            is_bookmark: false,
            title: "Mittelschmerz",
            description:
              `Viele Menstruierende nehmen auch noch ein weiteres Körperzeichen im Zyklus wahr: den sogenannten Mittelschmerz. Wie genau er sich anfühlt, kann sehr unterschiedlich sein. Manche spüren einen Schmerz im Unterbauch, der eher diffus ist und nicht klar zugeordnet werden kann. Manche spüren ein plötzliches Stechen, das nur ganz kurz da ist. Manchmal dauert der Mittelschmerz aber auch einen Tag, manchmal sogar mehrere. Manche können ihn eindeutig links oder rechts spüren. Manche nehmen ihn auch in anderen Bereichen ihres Körpers wahr: im Rücken, in den Beinen oder im Dammbereich.
              
              Was genau den Mittelschmerz verursacht, ist nicht klar. Aber genauso wie das Brustsymptom, unser Hautbild oder unsere Verdauung, ist der Mittelschmerz ein weiterer Hinweis auf die Geschehnisse in unserem Zyklus. In diesem Fall auf den Eisprung.
              
              Wenn ihr den Mittelschmerz wahrnehmt, schreibt ihn auf. Und wenn ihr Kinderwunsch habt, kann er euch helfen, die besonders fruchtbaren Tage zu finden.              
              `,
              link_to: []
          },
          {
            category_id: 5,
            id: 18,
            is_bookmark: false,
            title: "Zwischenblutung",
            description:
              `Es kann sein, dass du mitten im Zyklus rötlichen Zervixschleim oder eine Blutung beobachtest. 
              
              Das nennen wir Zwischenblutung oder auch Eisprungblutung. 
              
              Wenn du deine Temperatur beobachtest, wirst du merken, dass es sich nicht um eine normale Periode handelt, sondern um deinen Eisprung herum stattfindet und somit ein Zeichen für deine besonders fruchtbare Zeit ist.
              `,
              link_to: []
          },
          {
            category_id: 5,
            id: 19,
            is_bookmark: false,
            title: "Weitere Körperzeichen",
            description:
              `Im Laufe deines Zyklus kannst du noch weitere Körperzeichen beobachten, die sich verändern, wie zum Beispiel deine Stimmung, Hunger und Verdauung, dein Hautbild usw.
              
              Wenn du genau hinschaust, kannst du vielleicht auch eine Regelmäßigkeit erkennen. So weißt du, was dich in den nächsten Tagen erwartet, kannst dich darauf einstellen und es auch deine:r Partner:in kommunizieren. Das sorgt für mehr Verständnis und macht den Umfang mit deinen zyklischen Phasen leichter.              
              `,
              link_to: []
          },
          {
            category_id: 5,
            id: 20,
            is_bookmark: false,
            title: "Libido",
            description:
              `Insbesondere in der fruchtbaren Zeit merken manche von uns, dass sie mehr Lust auf Sex haben. Je näher der Eisprung rückt, desto größer wird die Lust. Manche beschreiben sogar, dass die Libido nach dem Eisprung ähnlich stark abfällt wie die Qualität des Zervixschleims.
              
              Natürlich wirken sich neben den Hormonen auch andere Faktoren positiv oder negativ auf unsere Libido aus, wie etwa Stress, unsere Partnerschaft oder unser körperliches Wohlbefinden allgemein.
              
              Track doch einfach mal deine Libido und finde heraus, ob es einen Zusammenhang zu deinem Zyklus gibt. 
              `,
              link_to: []
          },
          {
            category_id: 6,
            id: 21,
            is_bookmark: false,
            title: "Das fruchtbare Fenster",
            description:
              `Zervixschleim

              Sex – wie oft?

              Hier gilt: So oft wie ihr wollt. Am besten eben in der fruchtbaren Zeit.
              `,
              link_to: []
          },
          {
            category_id: 6,
            id: 22,
            is_bookmark: false,
            title: "Unerfüllter Kinderwunsch",
            description:
              `Bei circa 60 % der Paare mit Kinderwunsch werden innerhalb der ersten 6 Monate schwanger. Bei vielen Paaren beobachten wir, dass sie keinen Sex im fruchtbaren Fenster haben. Das kann natürlich auch eine Erklärung sein, warum es nicht klappt.
              
              Erst wenn 1 Jahr vergangen ist, ohne dass du schwanger geworden bist, obwohl du Sex in der fruchtbaren Zeit hattest, raten wir dir, eine Ärztin aufzusuchen. 
              
              Nimm dafür auch deine Zyklen mit und zeige sie ihr. Vielleicht kann sie daran ablesen, ob eine Hormonstörung vorliegt und dir gezielt helfen.
              `,
              link_to: []
          },
          {
            category_id: 6,
            id: 23,
            is_bookmark: false,
            title: "Feststellen einer Schwangerschaft",
            description:
              `Wenn die Eizelle nicht befruchtet wurde, geht sie nach 12 bis 16 Tagen zugrunde. 
              Wird sie hingegen befruchtet, dauert die Temperaturlage länger an. Wenn du nach 18 Tagen Hochlage keine Blutung bekommen hast, kannst du davon ausgehen, dass du schwanger bist.
              
              In deiner Temperaturkurve kannst du dann wahrscheinlich auch nochmal einen zweiten Anstieg innerhalb der Hochlage beobachten.
              `,
              link_to: []
          },
          {
            category_id: 6,
            id: 24,
            is_bookmark: false,
            title: "Geburtstermin berechnen",
            description:
              `Für die Berechnung des Geburtstermins gibt es zwei Herangehensweisen: 
              
              Gynäkologinnen errechnen den Eisprung pauschal und setzten dabei den 14. Zyklustag zugrunde. Da du an deiner Temperaturkurve viel genauer sagen kannst, wann dein Eisprung tatsächlich stattgefunden hat, empfehlen wir dir folgende Rechnung für den voraussichtlichen Geburtstermin.
              
              Ziehe vom Datum der 1. höheren Messung 7 Tage ab. Von diesem Datum dann nochmal 3 Monate abziehen. Und jetzt rechne ein Jahr drauf. Dann hast du den voraussichtlichen Entbindungstermin berechnet.
              
              <b>Beispiel:</b> Deine 1. höhere Messung war am 01.08.2021.
              Für den Fall, dass dein Eisprung deutlich von dem 14. Zyklustag abweicht, ist diese Unterscheidung besonders wichtig, da es sonst passieren kann, dass Entwicklungsverzögerungen vorhergesagt werden oder dein Kind geholt wird, da es vermeintlich überfällig ist.
              `,
              link_to: []
          },
          {
            category_id: 7,
            id: 25,
            is_bookmark: false,
            title: "PCO",
            description:
              `Das PCO-Syndrom (Polycystische Ovarien) ist eine Störung der Eierstockfunktion, die zu folgenden Zyklusstörungen führen kann: verlängerte Eireifungsphase, unregelmäßige Zyklen, vermehrt längere und unregelmäßige Zervixschleim-Phasen, häufiger monophasische Zyklen bis hin zum Ausbleiben der Periode. 
              Oft sind damit noch andere Symptome wie Akne oder eine verstärkt männliche Körperbehaarung verbunden, die auf die Erhöhung männlicher Hormone zurückzuführen sind. 
              Das PCO-Syndrom findet sich häufig bei Frauen mit unerfülltem Kinderwunsch. 
              Solche Verläufe sollten durch einen Arzt oder eine Ärztin abgeklärt werden.
              `,
              link_to: []
          },
          {
            category_id: 7,
            id: 26,
            is_bookmark: false,
            title: "Monophasische Zyklen",
            description:
              `Es gibt Zyklen, in denen bis zur nächsten Blutung kein Eisprung stattfindet und demzufolge auch durch das fehlende Progesteron keine Temperaturhochlage auftritt. Solche Zyklen nennt man monophasische Zyklen. Die Problematik besteht darin, dass man bei Blutungen ohne vorausgegangene Temperaturhochlage zunächst nie mit Sicherheit sagen kann, ob mit dieser Blutung wirklich ein neuer Zyklus beginnt. Es könnte sich auch um eine Eisprungblutung handeln, die im Augenblick wegen des noch nicht erfolgten Temperaturanstiegs als solche nicht erkennbar ist. Dies würde aber eine höchst fruchtbare Situation bedeuten.
              
              Monophasische Zyklen finden sich bevorzugt in denselben Lebensabschnitten wie sie schon bei den verlängerten Follikelphasen bzw. verkürzten Gelbkörperphasen beschrieben wurden, also in der Pubertät, den Wechseljahren, nach einer Schwangerschaft und in der Stillzeit und nach Absetzen hormoneller Verhütungsmittel. Darüber hinaus findet man sie auch bei Hochleistungssportlerinnen, bei extremen Abmagerungsdiäten oder Essstörungen wie Bulimie und Magersucht vor. Im Extremfall stellen hier die Eierstöcke ihre Funktion weitgehend ein. Durch das fehlende Östrogen wird die Gebärmutterschleimhaut nicht mehr aufgebaut und die Abbruchblutung entfällt.
              
              Wenn du mehr als drei Monate keine Blutung mehr hast, sprechen wir von einer <b>Amenorrhö</b>
              `,
              link_to: []
          },
          {
            category_id: 7,
            id: 27,
            is_bookmark: false,
            title: "Verkürzte Gelbkörperphase",
            description:
              `Sinkt die Temperatur bereits nach weniger als zehn Tagen wieder ab und tritt die nächste Blutung ein, sprechen wir von einer verkürzten Gelbkörperphase. Solche Zyklen kommen gehäuft in der Pubertät und vor der Menopause vor, also am Anfang und Ende der geschlechtsreifen Zeit. Man sieht sie auch öfter nach einer Schwangerschaft und nach Absetzen hormoneller Verhütungsmethoden.
              
              Genau so wie es bei manchen Frauen unter Stressbedingungen zu verlängerten Eireifungsphasen kommt, können unter diesen Umständen auch gehäuft verkürzte Gelbkörperphasen auftreten. Wenn Sie nur gelegentlich solche verkürzten Gelbkörperphasen beobachten, ist da kein Grund zur Sorge; denn schon der nächste Zyklus ist vielleicht wieder normal.
              
              Sollten Sie jedoch schon längere Zeit ein Kind wünschen und die Zyklusaufzeichnungen weisen vermehrt solche verkürzten Hochlagen auf, kann dies evtl. der Grund für die nicht eintretende Schwangerschaft sein; denn das Progesteron aus dem Gelbkörper muss die Gebärmutterschleimhaut genügend lang vorbereiten, damit die befruchtete Eizelle sich einnisten kann. Ansonsten wird sie mit der vorzeitig auftreten Blutung wieder ausgeschwemmt.
              `,
              link_to: []
          },
        ],
      });
    },
  });
}
