import test from 'ava';

const bibtexParse = require('../bibtexParse');


/* prints out all citations adding a button to end */


bibtexParse.clear();
bibtexParse.addBibtex(`

@inproceedings{marchant2012bayesian,
title={Bayesian optimisation for intelligent environmental monitoring},
    author={Marchant, Roman and Ramos, Fabio},
    booktitle={Intelligent Robots and Systems (IROS), 2012 IEEE/RSJ International Conference on},
    pages={2242--2249},
    year={2012},
    organization={IEEE}
}

@inproceedings{kandasamy2015high,
  title={High dimensional Bayesian optimisation and bandits via additive models},
  author={Kandasamy, Kirthevasan and Schneider, Jeff and P{\'o}czos, Barnab{\'a}s},
  booktitle={International Conference on Machine Learning},
  pages={295--304},
  year={2015}
}

@inproceedings{pelikan1999boa,
  title={BOA: The Bayesian optimization algorithm},
  author={Pelikan, Martin and Goldberg, David E and Cant{\'u}-Paz, Erick},
  booktitle={Proceedings of the 1st Annual Conference on Genetic and Evolutionary Computation-Volume 1},
  pages={525--532},
  year={1999},
  organization={Morgan Kaufmann Publishers Inc.}
}
`);



bibtexParse.sortAlphabetically();




const expected = `Kandasamy, Kirthevasan and Schneider, Jeff and P{'o}czos, Barnab{'a}s (2015) High dimensional Bayesian optimisation and bandits via additive models, International Conference on Machine Learning  button(type="button", class="btn btn-link, data-clipboard-text="@inproceedings{kandasamy2015high, title= {High dimensional Bayesian optimisation and bandits via additive models}, author= {Kandasamy, Kirthevasan and Schneider, Jeff and P{'o}czos, Barnab{'a}s}, booktitle= {International Conference on Machine Learning}, pages= {295--304}, year= {2015}}

") (copy bibtex) 
Marchant, Roman and Ramos, Fabio (2012) Bayesian optimisation for intelligent environmental monitoring, Intelligent Robots and Systems (IROS), 2012 IEEE/RSJ International Conference on  button(type="button", class="btn btn-link, data-clipboard-text="@inproceedings{marchant2012bayesian, title= {Bayesian optimisation for intelligent environmental monitoring}, author= {Marchant, Roman and Ramos, Fabio}, booktitle= {Intelligent Robots and Systems (IROS), 2012 IEEE/RSJ International Conference on}, pages= {2242--2249}, year= {2012}, organization= {IEEE}}

") (copy bibtex) 
Pelikan, Martin and Goldberg, David E and Cant{'u}-Paz, Erick (1999) BOA: The Bayesian optimization algorithm, Proceedings of the 1st Annual Conference on Genetic and Evolutionary Computation-Volume 1  button(type="button", class="btn btn-link, data-clipboard-text="@inproceedings{pelikan1999boa, title= {BOA: The Bayesian optimization algorithm}, author= {Pelikan, Martin and Goldberg, David E and Cant{'u}-Paz, Erick}, booktitle= {Proceedings of the 1st Annual Conference on Genetic and Evolutionary Computation-Volume 1}, pages= {525--532}, year= {1999}, organization= {Morgan Kaufmann Publishers Inc.}}

") (copy bibtex)`;



let printedCitations = bibtexParse.printOutReferences(true);

console.log(printedCitations);
test('Author year test', t => t.deepEqual(printedCitations, expected));

