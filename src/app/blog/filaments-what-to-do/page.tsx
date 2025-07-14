import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function FilamentsWhatToDo() {
  return (
    <div className="min-h-screen bg-white pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button asChild className="mb-6 primary-gold rounded-full px-6 py-2 font-medium">
          <a href="/blog">← Back to Blog</a>
        </Button>
        <Image src="/1.png" alt="Filaments, What to Do?" width={800} height={400} className="w-full h-64 object-cover rounded-lg mb-8" />
        <h1 className="text-3xl md:text-4xl font-bold mb-4 heading-font">Filaments, What to Do?</h1>
        <article className="prose prose-lg max-w-none">
          <h2>Filamentous Bacteria</h2>
          <p>As is the case with any group of microorganism populations, the relative proportion or blending of various species is advantageous for a healthy environment. Similarly, in wastewater treatment the blending of microorganisms in ratios specific to the waste stream being treated results in a highly treated effluent. In the case of filaments, trace amounts are responsible for several favorable process conditions including BOD<sub>5</sub> reduction and solids capture leading to clear effluent. Therefore the problem with filaments is not that they exist in the treatment system, rather, that they exist in relatively large numbers that do not allow for proper settling. Problems with filaments arise when they become one of the primary groups of microbes in the treatment system and begin to limit settling and compaction of solids in the clarifier. In order for filamentous bacteria to out compete other strains of bacteria or other biology for predominance in the treatment system, certain environmental conditions must exist. Types and general conditions for several of the more common types of filaments are:</p>
          <ol>
            <li><strong>Sphaerotilus natans</strong>: Low DO, Phosphorous Deficient</li>
            <li><strong>Thiothrix</strong>: Septicity, Nitrogen Deficient, Phosphorous Deficient</li>
            <li><strong>Nocardia</strong>: Oil and Grease</li>
            <li><strong>Microthrix Parvicella</strong>: Low F/M, Oil and Grease</li>
          </ol>
          <p>Some of the more common forms of filaments are Nocardia and M. Parvicella. These bacteria account for nearly half of the filament related issues in activated sludge systems in the United States and can produce heavy accumulations of viscous foam throughout much of the treatments system.</p>
          <h3>Environments favoring filaments over other microbial life are:</h3>
          <ul>
            <li><strong>Excessive organic loads</strong>: Many filaments are heterotrophs, meaning they cannot create their own food and must therefore get it from some other source. Much of their food and energy comes from simple organic compounds such as carbohydrates, lipids and proteins, each containing some form of carbon. In the case of protein, there is a nitrogen component as well. Excessively high organic loads can be the cause of significant reductions in DO concentrations leading to conditions more conducive for predomination of filamentous bacteria over other more desirable microbes.</li>
            <li><strong>Disproportionately low ammonia to organic load</strong>: Typical BOD<sub>5</sub> concentrations should be about 20 times that of nitrogen. Low ammonia to organic loads in domestic wastewater is not normal. However, systems treating industrial wastewater may experience this nutrient imbalance. Under this deficient nitrogen stressed condition, the amount of exopolysaccharide, or natural polymer, production is increased from its normal &lt;25% to about &gt;75%. This increase in polysaccharide production has the effect of making the water being treated more viscous leading to what settleability issues, often times referred to as slime bulking. To correct this condition, the concentration of BOD<sub>5</sub> must be reduced and/or supplemental nitrogen added. The topic of nutrient deficiencies will be discussed further in a future section.</li>
            <li><strong>Low pH, less than 6 su, favoring acid type fungi</strong>: While these are not bacteria, they can have similar effects on settling and bulking in the secondary clarifier. With that being said, fungal growth can be limited by pH adjustment with sodium hydroxide (caustic), lime, magnesium hydroxide and the like. Fungi are yeast like and have a tendency to float.</li>
            <li><strong>Nutrient Deficiencies</strong>: If specific nutrient concentrations are suspected to be insufficient, deficiencies in several types of nutrients should be evaluated:
              <ol>
                <li>Basic elements: carbon, nitrogen, phosphorous, sulfur, etc.</li>
                <li>Trace elements: potassium, calcium, zinc, magnesium, iron, manganese, copper, cobalt, etc.</li>
              </ol>
              While the nutrient deficiencies can include any of the above, the first sets of nutrients typically evaluated are nitrogen and phosphorous since they are often times the culprit. Of the two, the severity of operational issues is much greater with nitrogen. It is important to note that the generally accepted ratio for BOD<sub>5</sub>, Nitrogen and Phosphorous by weight is 100:5:1. Nitrogen can be supplemented with ammonia, nitric acid or other readily available nitrogen compounds with phosphorous often times being supplemented with phosphoric acid or phosphate.</li>
            <li><strong>Low Dissolved Oxygen Concentrations</strong>: If the dissolved oxygen (DO) concentrations in the aeration portion of the treatment system are too low, say &lt;1.0 mg/L, then the oxygen concentration by itself would favor increased filamentous bacteria growth due to their comparatively high surface area when compared to other microorganisms in the treatment system.</li>
          </ul>
          <p>In addition, filaments have the distinction of being similar to nitrifying organisms, in that they are strict aerobes as well, meaning they require elemental or free oxygen for respiration (breathing). As a point of reference, free (elemental) oxygen is the oxygen that can be measured with a DO meter. This is different than combined oxygen which as the name implies is the form that is combined with other elements such as nitrogen or phosphorous to form nitrates and phosphates etc.</p>
          <h3>Several checks and corrective actions for low DO conditions are:</h3>
          <ol>
            <li>Increase the amount of air to the aeration tank. The amount of oxygen transfer is directly related to contact time, bubble size, turbulence and temperature.
              <ul>
                <li>Increase the air valve opening to the tank containing low DO concentrations</li>
                <li>Install diffusers producing finer bubbles (better oxygen transfer due to the increased surface area to volume ratio of oxygen thereby allowing greater areas of the oxygen to come in contact with the water)</li>
                <li>Install more diffusers if more floor space is available inside of the aeration tank</li>
                <li>Inspect to verify diffusers are clean</li>
                <li>Inspect to see if diffusers are as deep as practical</li>
                <li>Inspect the air delivery system between the blowers and aerators for leaks</li>
                <li>Inspect air filter elements to be clean</li>
                <li>Inspect blower drive belts for tightness and not slipping</li>
                <li>If possible, change sheaves size on blowers to allow for greater blower output</li>
              </ul>
            </li>
            <li>Reduce the MLSS concentration and therefore the oxygen demand
              <ul>
                <li>Increase the amount of waste activated sludge (WAS) removed, decrease MCRT</li>
                <li>Improve primary clarifier efficiency, under conventional aeration conditions each pound of BOD<sub>5</sub> produces about 0.8 pounds of MLSS while extended aeration produces about 0.3 pounds. Reducing organic loading to the system both reduces the amount of oxygen necessary for oxidation with existing biology as well as helps control the amount of MLSS under aeration that would lead to further oxygen demands.</li>
              </ul>
            </li>
            <li>Reduce organic load to the treatment system
              <ul>
                <li>Install a dissolved air floatation (DAF) unit with chemical pretreatment into process for improved removal of BOD<sub>5</sub> and other insoluble pollutants before secondary treatment</li>
                <li>Provide influent flow equalization to dampen the effects of intermittent high BOD<sub>5</sub> loadings (this works best if the average BOD<sub>5</sub> for the equalization period would not create the low DO or septic conditions before secondary treatment)</li>
                <li>Install primary clarifier ahead of secondary treatment</li>
                <li>Chemically pretreat the influent ahead of primary clarifiers to improve removal of organics and any other insoluble pollutants that can potentially create a high DO demand. This method is similar to one that includes a DAF only instead of adding dissolved air to float the solids, there is a reliance on gravity to settle the solids.</li>
                <li>Include de-nitrification process closer to the beginning of the treatment system to use up some of the organic (BOD<sub>5</sub>) substrate leading to a reduction in DO demand at the aerated (aerobic) part of the treatment system</li>
              </ul>
            </li>
          </ol>
          <h3>Several conditions typically observed in the presence of large concentrations of filamentous bacteria are:</h3>
          <ol>
            <li>Clear supernatant in combination with solids occupying a large portion of the setting container leading to a higher than normal sludge volume index (SVI) of 150 to 200 mL/g or higher, equating to a low density sludge</li>
            <li>Low solids concentration in return activated sludge (RAS) due to the expanded clarifier blanket. For instance, if the blanket is normally 2 ft but is now 8 ft then the sludge blanket has expanded to 4 times its normal volume resulting in a proportionate reduction in the RAS concentration at the bottom of the clarifier.</li>
            <li>High sludge blanket in secondary clarifier in combination with a high SVI, if the SVI test were near normal we would conclude that the issue was more closely related to the treatment process and not the condition or character of the MLSS or its settling capabilities.</li>
            <li>When conducting the settleability test, a cone is formed in the center of the beaker due to the solids remaining expanded at the outer edges while they become more concentrated towards the center.</li>
            <li>When conducting a modified, or diluted, settleability test the volume occupied by the sludge in the diluted sample is nearly the same as the undiluted sample. With this example, the sludge is expanding to fill the volume of the beaker. It expands to nearly the top of the beaker due to buoyancy of the water.</li>
            <li>Microscopic examination, reveals hair like bacteria (filaments) in numbers greater than are normally observed. In some cases, filaments can account for the majority of the microbiology in which case killing much of the biomass is probably the best solution. In this case the amount of chlorine necessary to reduce the population of filaments is so great that it would have an extremely adverse effect on the remainder of microbes.</li>
          </ol>
          <h3>Possible short term corrective actions to minimize the symptoms of an overgrowth of filamentous bacteria:</h3>
          <ol>
            <li>Killing sludge and essentially starting from scratch. As noted above, this is usually in response to a very large population of filaments. I do this by adding enough chlorine to create total chlorine residual in the aeration tank after chlorine addition is completed. After the chlorine is dissipated (about zero), at least 50% of the MLSS is wasted followed by seeding from another source that could include other parts of your process not affected by the filaments.</li>
            <li>More structured killing by chlorinating RAS with a dose of about 5 to 10 pounds per 1,000 pounds mixed liquor volatile suspended solids (MLVSS, the volatile or biologically active portion of MLSS). Depending on your level of confidence, conducting bench tests prior to directly applying to the process can be helpful in establishing a starting point. If you start with 3 jars of mixed liquor, add increasingly large dosages of chlorine to the samples and mix, using your process detention time as the guide. Once you begin to see destruction of the filaments along with some activity of the more desired microbes then you are close to the starting point. Add a proportionate amount of chlorine to the process through the RAS using about 80% of the dose used in the effective bench test. Application should take place over a 2 or 3 day period. As with most tests, the dosage rate should begin low and increased until effectiveness is observed.</li>
            <li>It has been my experience that applying the chlorine at or near some point of mixing or turbulence in the system works best. This dosing point can near any of the following:
              <ul>
                <li>Near elbows in piping</li>
                <li>“T”’s in piping</li>
                <li>Ahead of RAS pumps</li>
                <li>In a tank with a pump in place for use as a mixer</li>
                <li>Where influent and RAS flows merge as long as sufficient current exists</li>
              </ul>
              Depending on a number of conditions, chlorination usually takes 2 to 3 days. Microscopic examinations and well as DO measurements will help guide determinations on how long the chlorination process should be.</li>
            <li>Improving SVI with a settling aid such as a flocculant to further concentrate/consolidate the solids can be helpful. The settling aid is usually in the form of a polymer and sometimes includes a coagulant either by themselves or in combination with a flocculant.</li>
          </ol>
          <h3>Possible long term corrective actions for the root cause of a filamentous bacteria overgrowth are:</h3>
          <ol>
            <li>Immediately – Maintaining air supply to provide DO concentrations above 2 mg/L. This improved conditions will take away the filaments competitive advantage with their ability to “grab” more of the available DO</li>
            <li>Immediately – Augment with nutrients, such as nitrogen (ammonia, nitric acid) and phosphorous (phosphoric acid), to offset any nutritional deficiencies</li>
            <li>Immediately – Maintaining pH to near 7 su and improve buffering capacity as well to limit changes in pH</li>
            <li>After filaments under control – Maintaining higher RAS rates to maximize the time the MLSS are under aeration (while the time in the clarifier will be reduced, so will the aeration hydraulic detention time as well which may have a minimal impact on the process treatment efficiency</li>
          </ol>
        </article>
        {/* Navigation */}
        <div className="flex justify-end items-center mt-12 mb-8 text-base text-gray-600">
          <div className="ml-auto">
            <Button asChild variant="outline" className="rounded-full px-6 py-2 font-medium">
              <a href="/blog/settleability-problem-or-not">Next Post &rarr;</a>
            </Button>
          </div>
        </div>
        {/* Leave a Comment */}
        <div className="bg-gray-50 rounded-lg p-8 mt-8">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Leave a Comment</h2>
          <p className="text-gray-600 mb-4">Your email address will not be published. Required fields are marked *</p>
          <form className="space-y-4">
            <textarea className="w-full border border-gray-300 rounded-lg p-3 min-h-[120px]" placeholder="Type here.." required></textarea>
            <div className="flex flex-col md:flex-row gap-4">
              <input className="flex-1 border border-gray-300 rounded-lg p-3" placeholder="Name*" required />
              <input className="flex-1 border border-gray-300 rounded-lg p-3" placeholder="Email*" type="email" required />
              <input className="flex-1 border border-gray-300 rounded-lg p-3" placeholder="Website" />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="save-info" className="h-4 w-4 border-gray-300 rounded" />
              <label htmlFor="save-info" className="text-gray-600 text-sm">Save my name, email, and website in this browser for the next time I comment.</label>
            </div>
            <Button type="submit" className="primary-gold rounded-full px-6 py-2 font-medium mt-2">Post Comment</Button>
          </form>
        </div>
        <Button asChild className="mt-8 primary-gold rounded-full px-6 py-2 font-medium">
          <a href="/blog">← Back to Blog</a>
        </Button>
      </div>
    </div>
  );
} 