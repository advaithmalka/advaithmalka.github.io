import React, { useEffect } from "react";
import "./YummyRecipes.css";
import { HashLink } from "react-router-hash-link";
const YummyRecipes = () => {
	useEffect(() => {
		document.title = "Yummy Recipes";
		document.body.classList.add("body-styles");
		return () => {
			document.body.classList.remove("body-styles");
		};
	});
	return (
		<div id="text">
			<main id="yummy">
				<h1>Advaith's Favorite Recipes</h1>
				<h2>Contents:</h2>
				<nav>
					<ol>
						{/* TODO HASH LINK */}
						<li>
							<HashLink to="#r1">
								<span>Spicy Grilled Cheese Sandwich</span>
							</HashLink>
						</li>
						<li>
							<HashLink to="#r2">
								<span>Sausage Pasta</span>
							</HashLink>
						</li>
						<li>
							<HashLink to="#r3">
								<span>Chocolate Chip Cookies</span>
							</HashLink>
						</li>
					</ol>
				</nav>
				<div className="line">
					<p>
						_____________________________________________________________________
					</p>
				</div>
				{/* recipe 1*/}
				<section id="recipe-1">
					<h2 id="r1">Spicy Grilled Cheese Sandwich</h2>
					<img
						className="photo"
						src="https://images.media-allrecipes.com/userphotos/720x405/5428846.jpg"
						width={400}
						alt="grilled chicken sandwich"
					/>
					<ul>
						<li>Time: 5 minutes</li>
						<li>Serves: 2</li>
						<li>352 cal.</li>
					</ul>
					<table className="table yummy">
						<thead>
							<tr>
								<th>Ingredients</th>
								<th>Quantity</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Butter -------------------------------</td>
								<td>2 Tablespoons</td>
							</tr>
							<tr>
								<td>White Bread -----------------------</td>
								<td>4 slices</td>
							</tr>
							<tr>
								<td>American Cheese -----------------</td>
								<td>2 slices</td>
							</tr>
							<tr>
								<td>Chopped Small onion -----------</td>
								<td>1/4</td>
							</tr>
							<tr>
								<td>Chopped jalapeno pepper --------</td>
								<td>1</td>
							</tr>
						</tbody>
					</table>
					<div className="steps">
						<h3>
							<strong>Steps</strong>
						</h3>
						<ol>
							<li>
								Heat a large skillet over low heat and spread
								butter onto one side of half of the slices of
								bread.
							</li>
							<li>
								Place the pieces, buttered side down, on the
								skillet and lay a slice of cheese on each one,
								and top with slices of onion and jalapeno.
							</li>
							<li>
								Butter the remaining pieces and place, buttered
								side up, onto the other slices of bread
							</li>
							<li>
								When the bottom of the sandwiches are toasted,
								flip and fry until brown on the other side.
							</li>
						</ol>
					</div>
					<p>
						<em>
							Source:
							<a
								target="blank"
								href="https://www.allrecipes.com/recipe/85901/spicy-grilled-cheese-sandwich/?internalSource=staff%20pick&referringId=17561&referringContentType=Recipe%20Hub"
							>
								Allrecipes.com
							</a>
						</em>
					</p>
					<div className="line">
						<p>
							_____________________________________________________________________
						</p>
					</div>
				</section>
				{/* recipe 2 */}
				<section id="recipe-2">
					<h2 id="r2">Sausage Pasta</h2>
					<img
						className="photo"
						src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5892736.jpg&w=595&h=595&c=sc&poi=face&q=85"
						width={400}
						alt="Sausage pasta"
					/>
					<ul>
						<li>Time: 45 minutes</li>
						<li>Serves: 6</li>
						<li>423 cal. per serving</li>
					</ul>
					<table className="table yummy">
						<thead>
							<tr>
								<th>Ingredients</th>
								<th>Quantity</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									Penne Pasta ----------------------------
								</td>
								<td>3/4 pound pasta</td>
							</tr>
							<tr>
								<td>
									Olive Oil -------------------------------
								</td>
								<td>1 tablespoon</td>
							</tr>
							<tr>
								<td>Spicy Italian sausage -----------------</td>
								<td>1 pound</td>
							</tr>
							<tr>
								<td>Chopped onion ----------------------</td>
								<td>1</td>
							</tr>
							<tr>
								<td>Minced garlic -------------------------</td>
								<td>4 cloves</td>
							</tr>
							<tr>
								<td>Chicken broth -------------------------</td>
								<td>1 can (14.5 ounces)</td>
							</tr>
							<tr>
								<td>
									Dried basil -----------------------------
								</td>
								<td>1 teaspoon</td>
							</tr>
							<tr>
								<td>Diced tomatoes -----------------------</td>
								<td>1 can (14.5 ounces)</td>
							</tr>
							<tr>
								<td>
									Spinach ---------------------------------
								</td>
								<td>10 ounces</td>
							</tr>
							<tr>
								<td>Grated Parmesan cheese -------------</td>
								<td>1/3 cup and 1 tablespoon</td>
							</tr>
						</tbody>
					</table>
					<h3 className="steps">
						<strong>Steps</strong>
					</h3>
					<ol className="steps">
						<li>
							Bring a large pot of lightly salted water to a boil.
							Add pasta and cook for 8 to 10 minutes then drain
							and reserve.
						</li>
						<li>
							In a large skillet, heat oil and sausage; cook
							through until no longer pink. During the last 5
							minutes of cooking, add onion and garlic
							<br />
							to skillet. Add broth, basil and tomatoes with
							liquid.
						</li>
						<li>
							Cook over medium heat for 5 minutes to slightly
							reduce. Add chopped spinach; cover skillet and
							simmer on reduced heat until
							<br />
							spinach is tender.
						</li>
						<li>
							Add pasta to skillet and mix together. Sprinkle with
							cheese and serve immediately.
						</li>
					</ol>
					<p>
						<em>
							Source:
							<a
								target="blank"
								href="https://www.allrecipes.com/recipe/19291/sausage-pasta/?internalSource=hub%20recipe&referringContentType=Search#nutrition"
							>
								Allrecipes.com
							</a>
						</em>
					</p>
					<div className="line">
						<p>
							_____________________________________________________________________
						</p>
					</div>
				</section>
				{/*recipe 3*/}
				<section id="recipe-3">
					<h2 id="r3">Chocolate Chip Cookies</h2>
					<img
						className="photo"
						src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5779667.jpg&w=596&h=596&c=sc&poi=face&q=85"
						width={400}
						alt="chocolate chip cookies"
					/>
					<ul>
						<li>Time: 40 minutes</li>
						<li>Servings: 18</li>
						<li>285 cal.</li>
					</ul>
					<table className="table yummy">
						<thead>
							<tr>
								<th>Ingredients</th>
								<th>Quantity</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									All-purpose flour
									--------------------------------
								</td>
								<td>2 cups</td>
							</tr>
							<tr>
								<td>
									Baking soda
									--------------------------------------
								</td>
								<td>1/2 teaspoon</td>
							</tr>
							<tr>
								<td>
									Salt
									------------------------------------------------
								</td>
								<td>1/2 teaspoon</td>
							</tr>
							<tr>
								<td>
									Melted unsalted butter
									--------------------------
								</td>
								<td>3/4 cup</td>
							</tr>
							<tr>
								<td>
									Packed brown sugar
									----------------------------
								</td>
								<td>1 cup</td>
							</tr>
							<tr>
								<td>
									White sugar
									--------------------------------------
								</td>
								<td>1/2 cup</td>
							</tr>
							<tr>
								<td>
									Vanilla extract
									-----------------------------------
								</td>
								<td>1 tablespoon</td>
							</tr>
							<tr>
								<td>
									Egg
									------------------------------------------------
								</td>
								<td>1</td>
							</tr>
							<tr>
								<td>
									Egg yolk
									------------------------------------------
								</td>
								<td>1</td>
							</tr>
							<tr>
								<td>
									Semi-sweet chocolate chips
									-------------------
								</td>
								<td>2 cups</td>
							</tr>
						</tbody>
					</table>
					<h3 className="steps">
						<strong>Steps</strong>
					</h3>
					<ol className="steps">
						<li>
							Preheat the oven to 325 degrees F (165 degrees C).
							Grease cookie sheets or line with parchment paper.
						</li>
						<li>
							Sift together the flour, baking soda and salt then
							set aside.
						</li>
						<li>
							In a medium bowl, cream together the melted butter,
							brown sugar and white sugar until well blended.
							<br />
							Beat in the vanilla, egg, and egg yolk until light
							and creamy. Mix in the sifted ingredients until just
							blended.
							<br />
							Stir in the chocolate chips by hand using a wooden
							spoon. Drop cookie dough 1/4 cup at a time onto the
							<br />
							prepared cookie sheets. Cookies should be about 3
							inches apart.
						</li>
					</ol>
					<p>
						<em>
							Source:
							<a
								target="blank"
								href="https://www.allrecipes.com/recipe/25037/best-big-fat-chewy-chocolate-chip-cookie/?internalSource=hub%20recipe&referringId=362&referringContentType=Recipe%20Hub#nutrition"
							>
								Allrecipes.com
							</a>
						</em>
					</p>
				</section>
			</main>
		</div>
	);
};

export default YummyRecipes;
